import { defineStore } from 'pinia';


export const useUserStore = defineStore('user', {
  state: () => ({
    users: [], // รายการผู้ใช้ทั้งหมด
    currentUser: null, // ผู้ใช้ที่กำลังถูกแก้ไข
  }),
  actions: {
    addUser(user) {
      const newUser = { id: Date.now(), ...user }; // สร้าง id
      this.users.push(newUser);
    },
    updateUser(updatedUser) {
      console.log('Updating User:', updatedUser); // ดูว่าผู้ใช้งานที่ส่งเข้ามาใช่ตัวที่ถูกต้องหรือไม่
      const index = this.users.findIndex((u) => u.id === updatedUser.id);
      if (index !== -1) {
        console.log('User Found at Index:', index); // เช็คว่าพบผู้ใช้งานใน list ไหม
        this.users[index] = { ...updatedUser };
      } else {
        console.error('User not found for update:', updatedUser.id);
      }
    },
    deleteUser(userId) {
      this.users = this.users.filter((u) => u.id !== userId); // ลบตาม id
    },
    setCurrentUser(user) {
      console.log('Selected User:', user); 
      this.currentUser = { ...user };
    },
    clearCurrentUser() {
      this.currentUser = null; 
    },

    loadFromStorage() {
      // ดึงข้อมูลจาก localStorage
      const storedData = localStorage.getItem('user-store');
      if (storedData) {
        this.users = JSON.parse(storedData);
      }
    },
    saveToStorage() {
      // เก็บข้อมูลใน localStorage
      localStorage.setItem('user-store', JSON.stringify(this.users));
    },
    setUsers(newUsers) {
      this.users = newUsers;
      this.saveToStorage();  // บันทึกลง localStorage ทุกครั้งที่เปลี่ยนแปลงข้อมูล
    },
  


  },
  persist: true, 
});

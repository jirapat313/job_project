<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <p>{{ user.name }} ({{ user.email }})</p>
      <button @click="editUser(user)">Edit</button> <!-- ส่ง user ที่เลือก -->
      
      
    </li>
    <br>
    <RouterLink to="/">Back</RouterLink>
  </ul>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    userStore.loadFromStorage();

    const editUser = (user) => {
      userStore.setCurrentUser(user); // ตั้งค่า currentUser ใน Store
      router.push('/update'); // ไปยังหน้าสำหรับแก้ไข
    };

    const deleteUser = (id) => {
      userStore.deleteUser(id);
    };

    return {
      users: userStore.users,
      editUser,
      deleteUser,
    };
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2>{{ isEdit ? 'Update User' : 'เพิ่มผู้ใช้' }}</h2>
    <input v-model="user.name" type="text" placeholder="Name" required />
    <input v-model="user.email" type="email" placeholder="Email" required />
    <button type="submit">{{ isEdit ? 'Update' : 'Add' }}</button>
    <button v-if="isEdit" type="button" @click="deleteUser">Delete User</button>
  </form>
</template>


<script>
import { useUserStore } from '@/stores/userStore';

export default {
  props: {
    isEdit: { type: Boolean, default: false },
  },
  setup(props) {
    const userStore = useUserStore();
    const user = props.isEdit
  ? { ...userStore.currentUser } // คัดลอกข้อมูล
  : { id: Date.now(), name: '', email: '' };

console.log('Loaded User in Form:', user); // ข้อมูลใหม่

    const handleSubmit = () => {
      if (props.isEdit) {
        userStore.updateUser(user); // อัปเดตข้อมูล
        userStore.clearCurrentUser(); 
      } else {
        userStore.addUser(user); // เพิ่มข้อมูลใหม่
      }
    };
    const deleteUser = () => {
      if (confirm('Are you sure you want to delete this user?')) {
        userStore.deleteUser(user.id);
        router.push('/');
      }
    };

    return { user, handleSubmit ,deleteUser};
  },
};
</script>

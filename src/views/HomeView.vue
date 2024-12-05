<template>
<center>
  <div>
    <h1>User</h1>
    <UserForm />
    <UserList />
    
  </div>
  
  </center>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import UserList from '@/components/UserList.vue';

export default {
  components: { UserForm, UserList },
};
</script>

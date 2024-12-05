<template>
<center>
  <div>
    
    <UserForm :isEdit="true" />
    
    <RouterLink to="/">Back</RouterLink>
  </div>
  </center>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  components: { UserForm },
  
};

</script>

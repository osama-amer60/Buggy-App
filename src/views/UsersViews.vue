<template>
  <div class="container users-list mt-5">
    <UsersVue v-if="showList"/>
    <AddUsers v-else/>

  </div>
</template>

<script lang="ts">
import AddUsers from '@/components/users/AddUsers.vue';
import UsersVue from '@/components/users/Users.vue';

import {useUsersStore} from '@/store/users'
import { mapState } from 'pinia';


export default{
name:'UsersViews',
    components:{
      UsersVue,
      AddUsers
    },
    computed:{
      ...mapState(useUsersStore,['showList'])
    }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
    <div class="text-center">
      <div class="users-list    mt-5">
        <h2>Users List</h2>
       
        <table v-if="usersList.length" class="w-100 table table-striped">
          <thead>
            <tr>
              <th>user Image </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Profile</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(user, i) in usersList" :key="i">
              <tr>
                <td> <img :src="user.image" style="width: 10vh; height: 10vh;" alt=""></td>
                <td class="pt-4" >{{ user.firstName }}</td>
                <td class="pt-4">{{ user.lastName }}</td>
                <td class="pt-4">{{ user.age }}</td>
                <td class="pt-4">{{ user.email }}</td>
                <td class="pt-4"><RouterLink :to="{name:'profile', params:{id:i}}"><i class="fa-solid fa-up-right-from-square"></i></RouterLink></td>
                <td class="pt-4"><button type="button" class="btn btn-success" @click.prevent="updateUser(i)">update</button></td>
                <td class="pt-4"><button type="button" class="btn btn-danger" @click.prevent="deleteUser(i)">delete</button></td>
              </tr>
            </template>
          </tbody>
        </table>
        <p v-else-if="usersList.length === 0" class="text-danger h3 fw-bold m-5"> No users found...</p>



        
      </div>
      <button type="button" class="btn btn-primary mt-3" v-if="showList" @click="updateShowList">Add New User</button>
    </div>
  </template>
  
  <script lang="ts">
  import {useUsersStore} from '@/store/users'
  import { mapActions, mapState } from 'pinia';
  export default {
    name: "users",
  
  computed:{
    ...mapState(useUsersStore,['usersList','showList'])

  },
  methods:{
    ...mapActions(useUsersStore,['deleteUser','updateUser','updateShowList']),

  }
  
  };
  </script>       
  
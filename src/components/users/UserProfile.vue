<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4 text-center">
        <img :src="userData.image" class="w-75" alt="" srcset="" />
      </div>
      <div class="col-8">
        <table class="table table-striped mt-5">
          <tbody>
            <tr>
            <td>First Name :</td>
            <td>{{userData.firstName}}</td>
          </tr>
          <tr>
            <td>Last Name :</td>
            <td>{{userData.lastName}}</td>
          </tr>
          <tr>
            <td>Age :</td>
            <td>{{userData.age}}</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{{userData.email}}</td>
          </tr>
          <tr>
            <td>Bio :</td>
            <td>{{userData.bio}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { ref, onMounted, computed } from "vue";
import { useUsersStore } from "@/store/users";
import { useRoute } from "vue-router";

export default {
  setup() {
    const userData = ref({});

    // get the user's array from store
    const usersList = computed(() => {
      return useUsersStore().$state.usersList;
    });

    onMounted(() => {
      // get route params
      const route = useRoute();
      const userId = Number(route.params.id);

      // get the obj from the array
      userData.value = usersList.value[userId];
    });

    return {
      userData,
    };
  },
};
</script>

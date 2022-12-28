<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4">
        <img :src="userData.image" class="w-75" alt="" srcset="">
      </div>
      <div class="col-8">
        <form>
          <div class="mb-3">
            <label for="bio" class="form-label">Bio :</label>
            <textarea
              class="form-control"
              id="bio"
              rows="6"
              v-model="userData.bio"
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="firstName" class="form-label">firstName :</label>
            <input
              class="form-control"
              id="firstName"
              v-model="userData.firstName"
              placeholder="Enter Your First name"
              required
            />
          </div>

          <div class="mb-3">
            <label for="lastName" class="form-label">lastName :</label>
            <input
              class="form-control"
              id="lastName"
              v-model="userData.lastName"
              placeholder="Enter Your Last name"
              required
            />
          </div>

          <div class="mb-3">
            <label for="age" class="form-label">Age :</label>
            <input
              class="form-control"
              id="age"
              v-model="userData.age"
              placeholder="Enter Your First name"
              required
              type="number"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input
              class="form-control"
              id="email"
              v-model="userData.email"
              placeholder="Enter Your E-mail"
              required
              type="email"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useUsersStore } from "@/store/users";
import { mapState } from "pinia";
export default {
  name: "profile",
  data() {
    return {
      userData: {} as object,
    };
  },
  computed: {
    ...mapState(useUsersStore, ["usersList"]),
  },
  mounted() {
    const userId: any = this.$route.params.id;
    this.userData = this.usersList[userId] as object;
  },
};
</script>

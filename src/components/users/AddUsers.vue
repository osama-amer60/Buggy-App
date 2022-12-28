<template>
  <div class="text-left mb-5">
    <form @submit="addUpdateUser" class="w-75 m-auto">
      <div class="mb-3">
        <label for="firstName" class="form-label">firstName :</label>
        <input
          class="form-control"
          id="firstName"
          v-model="form.firstName"
          placeholder="Enter Your First name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="lastName" class="form-label">lastName :</label>
        <input
          class="form-control"
          id="lastName"
          v-model="form.lastName"
          placeholder="Enter Your Last name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="age" class="form-label">Age :</label>
        <input
          class="form-control"
          id="age"
          v-model="form.age"
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
          v-model="form.email"
          placeholder="Enter Your E-mail"
          required
          type="email"
        />
      </div>

      <div class="mb-3">
        <label for="bio" class="form-label">Bio :</label>
        <textarea
          class="form-control"
          id="bio"
          rows="3"
          v-model="form.bio"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Iamge : </label>
        <input
          class="form-control"
          v-on="form.image"
          @change="getImageName"
          :required="!updatedUser"
          type="file"
          id="image"
          accept="image/*"
        />
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">
          {{ updatedUser ? "Update User" : "Submit" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { useUsersStore } from "@/store/users";
import { mapActions, mapState } from "pinia";

interface user {
  firstName: string;
  lastName: string;
  age?: number | null;
  email: string;
  bio: string;
  image: string;
}

export default {
  data(): any {
    return {
      // form:this.updatedUser? this.updatedUser: {
      //   firstName:'',
      //   lastName: '',
      //   age: '',
      //   email:'',
      // },

      form: this.updatedUser || {
        firstName: "",
        lastName: "",
        age: null,
        email: "",
        bio: "",
        image: "",
      },
    };
  },
  methods: {
    ...mapActions(useUsersStore, [
      "updateShowList",
      "addUser",
      "displayUpdatedUser",
    ]),
    addUpdateUser() {
      if (this.updatedUser) {
        // update user
        this.displayUpdatedUser(this.form);
      } else {
        // add user
        this.addUser(this.form);
      }

      this.updateShowList();
      console.log(this.form);
    },
    getImageName(e: any) {
      const image = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(image);

      reader.addEventListener("load", () => {
        console.log(reader.result);
        this.form.image = reader.result;
      });
    },
  },
  computed: {
    ...mapState(useUsersStore, ["updatedUser"]),
  },
  mounted() {
    if (this.updatedUser) {
      this.form = this.updatedUser;
    }
  },
};
</script>

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
          minlength="3"
          maxlength="10"
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
          minlength="3"
          maxlength="10"
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
          min="18"
          max="99"
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
          minlength="10"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Iamge : </label>
        <input
          class="form-control"
          v-on="form.image"
          @change="uploadImage"
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
import { ref, computed, onMounted } from "vue";
import { useUsersStore } from "@/store/users";
export default {
  setup() {
    const form = ref({
      firstName: "",
      lastName: "",
      age: null as number | null,
      email: "",
      bio: "",
      image: "" as string,
    });

    // get updatedUser from store
    const updatedUser = computed(() => {
      return useUsersStore().$state.updatedUser;
    });

    // get actions from store
    const usersStore = useUsersStore();
    const updateShowList = usersStore.updateShowList;
    const addUser = usersStore.addUser;
    const displayUpdatedUser = usersStore.displayUpdatedUser;

    //submit form
    const addUpdateUser = () => {
      if (updatedUser.value) {
        // update user
        displayUpdatedUser(form.value);
      } else {
        // add user
        addUser(form.value);
      }
      updateShowList();
    };

    const uploadImage = (e: any) => {
      const image = e.target.files[0];

      if (image.size > 250000) {
        alert(`File size is too big => max 250kB`);
        return null;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.addEventListener("load", () => {
          if (typeof reader.result === "string") {
            form.value.image = reader.result;
          }
        });
      }
    };

    onMounted(() => {
      if (updatedUser.value) {
        form.value = {
          firstName: updatedUser.value.firstName || "",
          lastName: updatedUser.value.lastName || "",
          age: updatedUser.value.age || null,
          email: updatedUser.value.email || "",
          bio: updatedUser.value.bio || "",
          image: updatedUser.value.image || "",
        };
      }
    });

    return {
      form,
      updatedUser,
      addUpdateUser,
      uploadImage,
    };
  },
};
</script>

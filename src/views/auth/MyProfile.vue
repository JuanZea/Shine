<template>
  <div class="h-full bg-poco">
    <div class="flex justify-center">
      <div class="h-40 bg-white shadow-lg mt-12 p-4 rounded mb-8">
        <img class="mx-auto shadow rounded-full" :src="`https://ui-avatars.com/api/?name=${user.displayName}&rounded=true&bold=true`" alt="avatar" />
        <h1 class="font-righteous font-bold text-2xl text-center">{{ user.displayName }}</h1>
        <h2 class="font-bold text-gray-500">{{ user.email }}</h2>
      </div>
    </div>

    <div v-if="!showAdminLogin && !isAdmin" class="flex justify-center">
      <button class="btn btn-red text-white font-bold opacity-0 hover:opacity-100" @click="adminMode(true)">ADMIN MODE</button>
    </div>

    <div v-if="showAdminLogin && !isAdmin" class="flex flex-col justify-center items-center">
      <h1 class="font-righteous text-2xl">ADMIN MODE</h1>
      <div class="flex flex-col gap-4">
        <input v-model="key" type="text" class="shadow-sm focus:ring-indigo-500 uppercase text-center focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="XXXX-XXXX" />
        <button @click="validate" class="btn btn-red text-white flex justify-center">
          VALIDATE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { useAdmin } from "../../use";
import { onDeactivated, ref } from "vue";

export default {
  setup() {
    onDeactivated(() => (showAdminLogin.value = false));
    const user = firebase.auth().currentUser;
    const { isAdmin } = useAdmin();
    const key = ref('');
    const showAdminLogin = ref(false);
    const validate = () => {
      if (key.value !== '123456') return;
      isAdmin.value = true;
    }
    const adminMode = (bool) => showAdminLogin.value = !!bool;
    return { user, adminMode, isAdmin, showAdminLogin, key, validate }
  }
}
</script>
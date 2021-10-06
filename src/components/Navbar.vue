<template>
  <nav class="flex justify-between bg-retrat shadow-md relative p-2">
    <div class="flex gap-4 mr-4">
      <button @click="goToHome" title="Home" class="rounded px-2 py-1 bg-white bg-opacity-70">
        <img class="cursor-pointer hvr-bounce-in h-7" src="/src/assets/icons/cameraIcon.png" alt="firework svg">
      </button>
      <searchbar/>
    </div>
    <div class="flex items-center gap-4">
      <button v-if="isAdmin" title="Admin" class="rounded px-2 py-1 bg-black bg-opacity-70" @click="router.push({name: 'adminOptions'})">
        <key-icon class="h-7 text-poco hvr-bounce-in"/>
      </button>
      <button title="About" class="rounded px-2 py-1 bg-indigo-100 bg-opacity-70" @click="router.push({name: 'about'})">
        <at-symbol-icon class="h-7 text-indigo-500 hvr-bounce-in"/>
      </button>
      <button title="My profile" class="rounded px-2 py-1 bg-white bg-opacity-70" @click="router.push({name: 'myProfile'})">
        <user-circle-icon class="h-7 text-gray-500 hvr-bounce-in"/>
      </button>
      <button title="Logout" class="bg-red-500 rounded px-2 py-1 hover:bg-white group hvr-buzz-out" @click="logout">
        <logout-icon class="h-7 text-white group-hover:text-red-500"/>
      </button>
    </div>
  </nav>
</template>

<script>
import { LogoutIcon, UserCircleIcon, AtSymbolIcon, KeyIcon } from "@heroicons/vue/outline";
import { useAdmin, useAuthentication } from "../use";
import { useRouter } from "vue-router";
import Searchbar from "./Searchbar.vue";
import useFilms from "../use/useFilms";

export default {

  components: { Searchbar, LogoutIcon, UserCircleIcon, AtSymbolIcon, KeyIcon },

  setup() {

    const router = useRouter();
    const { setQuery, refreshFilms } = useFilms();
    const { isAdmin } = useAdmin();
    const goToHome = () => {
      setQuery();
      refreshFilms();
      router.push({name: 'home'});
    }
    const { logout } = useAuthentication();
    return { logout, router, goToHome, isAdmin }

  }

}

</script>
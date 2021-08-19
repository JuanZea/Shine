
<template>
  <nav class="flex justify-between bg-retrat shadow-md relative p-2">
    <img  src="/src/assets/icons/firework.svg" alt="firework svg">
    <div class="flex-grow flex items-center">
      <button class="bg-black text-white font-bold rounded-lg px-4 py-1 font-righteous tracking-widest" @click="router.push({name: 'myProfile'})">MyProfile</button>
    </div>
    <div class="flex items-center">
      <button class="bg-red-500 text-white font-bold rounded-lg px-4 py-1 font-righteous tracking-widest" @click="logout">SALIR</button>
    </div>
  </nav>
</template>

<script>
import {useAuthentication} from "../use";
import {useRouter} from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const {logout} = useAuthentication();
    return {logout, router}
  }
}


</script>
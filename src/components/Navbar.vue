<template>
  <nav class="flex justify-between bg-retrat shadow-md relative p-2">
    <img  src="/src/assets/icons/firework.svg" alt="firework svg">
    <div class="flex-grow flex items-center ">
      <div>
        <button class="bg-black text-white font-bold rounded-lg px-4 py-1 font-righteous tracking-widest hover:bg-gray-600 mr-1" @click="router.push({name: 'home'})">Home</button>
      </div>
      <div>
        <button class="bg-black text-white font-bold rounded-lg px-4 py-1 font-righteous tracking-widest hover:bg-gray-600" @click="router.push({name: 'myProfile'})">MyProfile</button>
      </div>
      <div>
        <button class="bg-black text-white font-bold rounded-lg px-4 py-1 font-righteous tracking-widest hover:bg-gray-600 ml-1" @click="router.push({name: 'about'})">About</button>
      </div>
    </div>
    <div>
      <input type="search" placeholder="Buscar" class ="mr-2 shadow appearance-none rounded-2xl" name="">
    </div>
    <div class="flex items-center">
      <button class="bg-red-500 text-white font-bold rounded-lg px-4 py-1 font-righteous tracking-widest" @click="logout">Sign out</button>
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
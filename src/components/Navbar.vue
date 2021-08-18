<template>
  <nav class="flex justify-between bg-retrat shadow-md relative p-2">
    <img src="/src/assets/icons/firework.svg" alt="firework svg">
    <button class="bg-red-500 text-white font-bold rounded-lg px-4 font-righteous tracking-widest" @click="logout">SALIR</button>
  </nav>
</template>

<script>
import {useAuthentication} from "../use";

export default {
  setup() {
    const {logout} = useAuthentication();
    return {logout}
  }
}
</script>
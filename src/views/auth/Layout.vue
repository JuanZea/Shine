<template>
  <div class="h-screen flex flex-col">
    <navbar/>
    <div class="flex-grow">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";

export default {
  components: {Navbar},
}
</script>
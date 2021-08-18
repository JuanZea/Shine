<template>
  <button @click="logout">SALIR</button>
  <router-view/>
</template>

<script>
import {useAuthentication} from "../../use";

export default {
  setup() {
    const {logout} = useAuthentication();
    return {logout}
  }
}
</script>
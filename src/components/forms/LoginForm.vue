<template>
  <div class="relative max-w-lg font-balsamiq">
    <div class="flex flex-col gap-4 relative top-4 mb-4 justify-center bg-retrat rounded p-8 shadow-md">
      <my-input v-model="email" id="email" name="email" type="text" div-class="flex-col" lab-class="font-bold">
        <template #label>
          EMAIL
        </template>
      </my-input>

      <my-input v-model="password" id="password" name="password" type="password" div-class="flex-col" lab-class="font-bold">
        <template #label>
          PASSWORD
        </template>
      </my-input>

      <div class="flex justify-between">
        <button class="btn btn-red text-white focus:ring-offset-retrat" @click="$emit('singUp')">SING UP</button>
        <button class="btn btn-green text-white focus:ring-offset-retrat" @click="login">GO!</button>
      </div>
    </div>

    <div class="absolute top-0 w-full flex justify-center">
      <div class="bg-retrat shadow rounded-lg font-bold px-4 py-1 animate-slide font-righteous">LOGIN</div>
    </div>
  </div>
</template>

<script>
import MyInput from "../MyInput.vue";
import {useAuthentication} from "../../use";
import {ref} from "vue";
export default {
  emits: ['singUp'],
  components: {MyInput},
  setup() {
    const email = ref('');
    const password = ref('');
    const {login: globalLogin} = useAuthentication();
    const login = () => globalLogin(email.value, password.value);
    return {email, password, login}
  }
}
</script>
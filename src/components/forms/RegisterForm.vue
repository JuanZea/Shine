<template>
  <div class="relative max-w-lg font-balsamiq">
    <div class="flex flex-col gap-4 relative top-4 mb-4 justify-center bg-retrat rounded p-8 shadow-md">
      <my-input v-model="name" id="name" name="name" type="text" div-class="flex-col" lab-class="font-bold">
        <template #label>
          NAME
        </template>
      </my-input>

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

      <my-input v-model="confirmPassword" id="confirm-password" name="confirm-password" type="password" div-class="flex-col" lab-class="font-bold">
        <template #label>
          CONFIRM PASSWORD
        </template>
      </my-input>

      <div class="flex justify-between">
        <button class="btn btn-red text-white focus:ring-offset-retrat" @click="$emit('goBack')">GO BACK</button>
        <button class="btn btn-green text-white focus:ring-offset-retrat" @click="confirm">CONFIRM</button>
      </div>
    </div>

    <div class="absolute top-0 w-full flex justify-center">
      <div class="bg-retrat shadow rounded-lg font-bold px-4 py-1 animate-slide font-righteous">REGISTER</div>
    </div>
  </div>
</template>

<script>
import MyInput from "../MyInput.vue";
import {ref} from "vue";
import {useAuthentication} from "../../use"
export default {
  emits: ['goBack'],
  components: {MyInput},
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const {register} = useAuthentication();

    const confirm = () => {
      if (password.value === confirmPassword.value) {
        register(name.value, email.value, password.value)
      }
    }

    return {name, email, password, confirmPassword, confirm}
  }
}
</script>
<template>
  <div class="min-h-screen flex justify-center bg-poco">
    <div class="mt-8">
      <login-form v-if="login" @signUp="login = false"/>
      <register-form v-else @goBack="login = true"/>
    </div>
  </div>
</template>

<script>
import LoginForm from "../../components/forms/LoginForm.vue";
import RegisterForm from "../../components/forms/RegisterForm.vue";
import { ref } from "vue";
import firebase from "firebase/app";
import { useRouter } from "vue-router";
export default {
  components: { RegisterForm, LoginForm },
  setup() {
    const router = useRouter();
    if (firebase.getCurrentUser()) router.push({name: 'home'});
    const login = ref(true);
    return { login }
  }
}
</script>
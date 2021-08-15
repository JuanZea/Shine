<template>
  <div class="min-h-screen flex justify-center bg-poco">
    <div class="mt-8">
      <login-form/>
    </div>
  </div>
</template>

<script>
import LoginForm from "../../components/forms/LoginForm.vue";
export default {
  components: {LoginForm}
}
</script>
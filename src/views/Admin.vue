<template>
  <div class="bg-poco h-screen flex flex-col justify-center items-center">
    <h1 class="font-righteous text-6xl mb-4">ADMIN MODE</h1>
    <h1 class="font-righteous text-red-600 text-6xl mb-4 uppercase">{{ key }}</h1>
    <div class="flex flex-col gap-4">
      <input v-model="key" type="text" class="shadow-sm focus:ring-indigo-500 uppercase text-center focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="XXXX-XXXX" />
      <button @click="validate" class="btn btn-red text-white flex justify-center">
        INGRESAR
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAdmin } from "../use";

export default {
  setup() {

    const key = ref('');
    const alert = ref(false);
    const { isAdmin } = useAdmin();
    const validate = () => {
      if (key.value === '1234-5678') {
          alert.value = true;
          isAdmin.value = true;
      }
    }
    return { key, validate }







    










    t('components.modal.delete', {type: 17, count: 15})











    const t = (key) => {

    }

    {
      filters: "No tienes filtros | Solamente tienes un filtro | Tienes 17 filtros"
    }

















  }
};
</script>
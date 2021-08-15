<template>
  <div class="relative max-w-lg font-balsamiq">
    <div class="flex flex-col gap-4 relative top-4 justify-center bg-retrat rounded p-8 shadow-md">
      <div class="flex flex-col">
        <label for="email" class="font-bold">CORREO ELECTRÓNICO</label>
        <input id="email" name="email" type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
      </div>

      <div class="flex flex-col">
        <label for="password" class="font-bold">CONTRASEÑA</label>
        <input id="password" name="password" type="password">
      </div>

      <div class="flex justify-between">
        <button class="btn btn-red text-white focus:ring-offset-retrat">REGISTRARSE</button>
        <button class="btn btn-green text-white focus:ring-offset-retrat">ENTRAR</button>
      </div>
    </div>

    <div class="absolute top-0 w-full flex justify-center">
      <div class="bg-retrat shadow rounded-lg font-bold px-4 py-1 animate-slide font-righteous">INICIA SESIÓN</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
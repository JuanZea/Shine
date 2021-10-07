<template>
  <div class="h-full bg-poco flex flex-col">
    <div class="container mx-auto lg:flex shadow">
      <div class="flex-grow bg-black bg-opacity-10">
        <div class="flex justify-center"><h2 class="text-2xl font-bold font-righteous text-center bg-black rounded-b-full text-white px-6 tracking-widest">Catalogue</h2></div>
        <div class="py-6 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <div v-if="!films" class="flex flex-col items-center justify-center col-span-full font-bold">
            <span class="text-3xl font-balsamiq">Loading...</span>
            <clock-icon class="h-10 animate-spin"/>
          </div>
          <div v-else-if="!films.length" class="flex flex-col items-center justify-center col-span-full font-bold">
            <span class="text-3xl font-righteous bg-red-500 px-8 py-1 rounded">NOT FOUND</span>
              <img class="h-80 shadow border-gray-300 border mt-8"
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80"
              alt="Not found image">
          </div>
          <poster v-else v-for="film in films" :film="film"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Poster from "../../components/Poster.vue";
import { useFilms } from "../../use";
import { ClockIcon } from '@heroicons/vue/outline';

export default {
  components: { Poster, ClockIcon },
  setup() {
    const { films, refreshFilms } = useFilms();
    refreshFilms();
    return { films }
  }
}
</script>

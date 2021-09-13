<template>
  <div class="h-full bg-poco flex flex-col">
    <div class="container mx-auto lg:flex shadow">
      <div class="flex-grow bg-black bg-opacity-10">
        <div class="flex justify-center"><h2 class="text-2xl font-bold font-righteous text-center bg-black rounded-b-full text-white px-6 tracking-widest">Catalogue</h2></div>
        <div class="py-6 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <poster v-if="films" v-for="film in films" :film="film"/>
        </div>
      </div>
      <div class="bg-black bg-opacity-20 px-6">
        <div class="flex justify-center"><h2 class="text-2xl font-bold font-righteous text-center bg-black rounded-b-full text-white px-6 mb-6 tracking-widest">Featured</h2></div>
        <div class="grid gap-6">
          <video src="https://www.youtube.com/embed/O7zvehDxttM"/>
<!--          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source=""/>-->
<!--          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source=""/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Poster from "../../components/Poster.vue";
import {filmsService} from "../../services/filmsService";
import {ref} from "vue";
import {useFilms} from "../../use";

export default {
  components: {Poster},
  setup() {
    const {films, refreshFilms} = useFilms();
    refreshFilms();
    return {films}
  }
}
</script>

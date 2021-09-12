<template>
  <div v-if="film" class="bg-poco h-full flex items-center">
    <div class="container bg-black bg-opacity-10 mx-auto p-6">
      <div class="flex">
        <img width="500" :src="film.img" alt="Poster film">
        <div class="flex-grow bg-white bg-opacity-20">
          <h1 class="font-righteous text-5xl ml-4 mt-4">{{`${film.title} (${film.year})`}}</h1>
          <p class="p-6 font-balsamiq text-xl">{{film.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {filmsService} from "../../services/filmsService";

export default {
  setup() {
    const film = ref()
    const {params} = useRoute();
    filmsService.one(params.id)
      .then(response => {
        film.value = response;
      })
    return {film}
  }
}
</script>
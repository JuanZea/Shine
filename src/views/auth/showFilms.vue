<template>
  <div v-if="film" class="bg-poco h-full flex items-center">
    <div class="container bg-black bg-opacity-10 mx-auto p-6">
      <div class="flex flex-col items-center lg:flex-row gap-4">
        <img width="500" :src="film.img" alt="Poster film">
        <div class="flex-grow bg-white bg-opacity-20">
          <div class="h-1/2 flex flex-col">
            <div class="flex justify-between pt-4 mr-4">
              <h1 class="font-righteous text-5xl ml-6">{{`${film.title} (${film.year})`}}</h1>
              <a class="cursor-pointer" :href="film.referenceUrl" target="_blank">
                <external-link-icon class="h-10 hvr-bounce-in hover:bg-white hover:bg-opacity-50 rounded-full p-2"/>
              </a>
            </div>
            <div class="flex items-center gap-2 mt-5 px-6">
              <span class="font-bold">Director: </span>
              <span class="px-4 py-1 bg-poco rounded-lg font-bold shadow">{{film.director}}</span>
              <span class="font-bold">Duration: </span>
              <span class="px-4 py-1 bg-poco rounded-lg font-bold shadow">{{film.duration}}</span>
            </div>
            <p class="p-6 font-balsamiq text-xl">{{film.description}}</p>
          </div>

          <div class="h-1/2 flex justify-center items-center">
            <div class="bg-black bg-opacity-30 flex-grow h-10 border-t-8 border-black border-opacity-10"></div>
            <div class="bg-black bg-opacity-30 rounded-l-full w-10 h-full border-l-8 border-black border-opacity-10"></div>
            <div class="border-black border-opacity-30 border-dashed p-2 border-8 rounded">
              <iframe class="md:hidden" height="200" width="400" :src="film.trailer" frameborder="0"></iframe>
              <iframe class="hidden md:block" height="300" width="600" :src="film.trailer" frameborder="0"></iframe>
            </div>
            <div class="bg-black bg-opacity-30 rounded-r-full w-10 h-full border-r-8 border-black border-opacity-10"></div>
            <div class="bg-black bg-opacity-30 flex-grow h-10 border-t-8 border-black border-opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {ExternalLinkIcon, StarIcon as StarOutline} from "@heroicons/vue/outline";
import {StarIcon as StarSolid} from "@heroicons/vue/solid";
import {filmsService} from "../../services/filmsService";

export default {
  components: {ExternalLinkIcon, StarSolid, StarOutline},
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
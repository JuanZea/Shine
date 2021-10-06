<template>
  <div class="bg-gray-50 bg-opacity-70 h-full flex flex-col lg:flex-row gap-4 p-6">
    <div class="rounded-lg bg-gray-100 p-4 shadow">
      <div>
        <span class="font-bold text-gray-500">Selector:</span>
        <div class="flex gap-2">
          <my-input v-model="idx" id="selector" type="number" div-class="flex-col" @keyup.enter="search"/>
          <button @click="search" type="button" class="border border-gray-300 text-sm rounded-full px-2 text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-poco focus:border-poco">
            <search-circle-icon class="h-7 w-7 text-gray-400" aria-hidden="true"/>
          </button>
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-gray-100 p-4 shadow">
      <h2 class="font-bold font-balsamiq text-xl mb-3">:: Film Data ::</h2>
      <div class="flex flex-col gap-3">
        <div>
          <span class="font-bold text-gray-500">Title:</span>
          <my-input v-model="filmTitle" id="name" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Director:</span>
          <my-input v-model="filmDirector" id="director" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Year:</span>
          <my-input v-model="filmYear" id="year" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Duration:</span>
          <my-input v-model="filmDuration" id="duration" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Poster:</span>
          <my-input v-model="filmPoster" id="poster" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Reference:</span>
          <my-input v-model="filmReference" id="reference" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Trailer:</span>
          <my-input v-model="filmTrailer" id="trailer" type="text" />
        </div>
        <div>
          <span class="font-bold text-gray-500">Description:</span>
          <my-input v-model="filmDescription" id="description" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from "../../components/MyInput.vue";
import { ref } from "vue";
import { SearchCircleIcon } from '@heroicons/vue/outline';
import { filmsService } from "../../services/filmsService";
export default {
  components: { MyInput, SearchCircleIcon },
  setup() {
    const idx = ref();
    const search = async () => {
      const film = await filmsService.one(idx.value)
      console.log(film)
      filmTitle.value = film.title
      filmDirector.value = film.director
      filmYear.value = film.year
      filmDuration.value = film.duration
      filmPoster.value = film.img
      filmReference.value = film.referenceUrl
      filmTrailer.value = film.trailer
      filmDescription.value = film.description
    };

    const filmTitle = ref();
    const filmDirector = ref();
    const filmYear = ref();
    const filmDuration = ref();
    const filmPoster = ref();
    const filmReference = ref();
    const filmTrailer = ref();
    const filmDescription = ref();

    return { idx, search, filmTitle, filmDirector, filmYear, filmDuration, filmPoster, filmReference, filmTrailer, filmDescription }
  }
};
</script>
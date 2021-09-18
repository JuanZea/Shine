<template>
  <div class="flex rounded-md shadow-sm sm:w-80">
    <div class="relative flex items-stretch flex-grow focus-within:z-10">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <film-icon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
      </div>
      <input v-model="filmName" @keydown.enter="search" type="text" name="film" id="film" class="focus:ring-poco focus:border-poco block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-gray-300" placeholder="Find your film"/>
    </div>
    <button @click="search" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-poco focus:border-poco">
      <search-circle-icon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
    </button>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import { SearchCircleIcon, FilmIcon } from '@heroicons/vue/solid';
import useFilms from "../use/useFilms";
import {useRouter} from "vue-router";

export default {

  components: { SearchCircleIcon, FilmIcon },

  setup() {

    const router = useRouter();
    const filmName = ref();

    const { setQuery, refreshFilms, options } = useFilms();

    watch(options, current => {
      if (!current) filmName.value = null;
    })

    const search = async () => {
      setQuery(filmName.value);
      await refreshFilms();
      router.push({name: 'home'});
    }

    return { filmName, search }

  }

}
</script>
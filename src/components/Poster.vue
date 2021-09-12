<template>
  <div class="flex justify-center">
    <div class="relative">
      <router-link :to="{name: 'showfilms', params: {id: film.id}}">
        <img class="rounded-lg" width="200" height="300" :src="film.img" alt="Poster image">
        <div class="absolute inset-0 h-full w-full opacity-0 bg-black hover:opacity-90 rounded-lg px-6 py-4">
          <h1 class="font-bold text-white font-righteous mb-2">{{ capitalize(film.title) }}</h1>
          <p class="text-white line-clamp-9 font-balsamiq">{{ capitalize(film.description) }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import capitalize from "lodash/capitalize";
export default {
  props: {film: {required: true, type: Object}},
  setup() {
    return {capitalize}
  }
}
</script>
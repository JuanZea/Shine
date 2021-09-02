<template>
  <div class="flex justify-center">
    <div class="bg-green-500 relative">
      <router-link :to="{name: 'showfilms', params: {id: 1}}">
        <img class="rounded-lg" width="200" height="300" :src="source" alt="Poster image">
        <div class="absolute inset-0 h-full w-full opacity-0 bg-black hover:opacity-100 rounded-lg px-6 py-4">
          <h1 class="font-bold text-white font-righteous mb-2">{{ title }}</h1>
          <p class="text-white line-clamp-9">{{ desc }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {source: {required: true, type: String}, title: {required: true, type: String}, desc: {required: true, type: String}},
  name: "Poster"
}
</script>
<template>
  <div class="h-full bg-poco flex flex-col">
    <div class="h-72 bg-orange-600">
      <carousel/>
    </div>

    <div class="container mx-auto bg-poco lg:flex">
      <div class="flex-grow">
        <div class="bg-blue-500 py-6 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="https://cuevana3.io/wp-content/uploads/2021/08/righteous-blood-47392-poster-200x300.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="https://cuevana3.io/wp-content/uploads/2021/08/seven-days-war-47403-poster-200x300.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="https://cuevana3.io/wp-content/uploads/2021/08/seven-days-war-47403-poster-200x300.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="https://cuevana3.io/wp-content/uploads/2021/08/useless-47758-poster-200x300.jpg"/>
        </div>
      </div>
      <div class="bg-red-500 px-6">
        <h2 class="text-2xl font-bold font-righteous mb-6">Destacadas</h2>
        <div>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="https://cuevana3.io/wp-content/uploads/2021/08/righteous-blood-47392-poster-200x300.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../../components/Carousel.vue";
import Poster from "../../components/Poster.vue";

export default {
  name: "Home",
  components: {Poster, Carousel}
}
</script>

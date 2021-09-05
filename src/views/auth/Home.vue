<template>
  <div class="h-full bg-poco flex flex-col">
    <div class="container mx-auto lg:flex shadow">
      <div class="flex-grow bg-black bg-opacity-10">
        <div class="flex justify-center"><h2 class="text-2xl font-bold font-righteous text-center bg-black rounded-b-full text-white px-6 tracking-widest">Catalogue</h2></div>
        <div class="py-6 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//uUHvlkLavotfGsNtosDy8ShsIYF.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//acCS12FVUQ7blkC8qEbuXbsWEs2.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//fwoETElxZqiF3it8F4HitSliXqp.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//oBgWY00bEFeZ9N25wWVyuQddbAo.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//9W49fy5G7v9Ed3CXtvMi41YqZtt.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//34xBL6BXNYFqtHO9zhcgoakS4aP.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"/>
        </div>
      </div>
      <div class="bg-black bg-opacity-20 px-6">
        <div class="flex justify-center"><h2 class="text-2xl font-bold font-righteous text-center bg-black rounded-b-full text-white px-6 mb-6 tracking-widest">Featured</h2></div>
        <div class="grid gap-6">
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//sJWwkYc9ajwnPRSkqj8Aue5JbKz.jpg"/>
          <poster title="La momia" desc="En una tumba profunda debajo del extenso desierto una antigua princesa es despertada, trayendo consigo toda la maldad y el terror que fueron creciendo durante los siglos y que desafían todo entendimiento humano." source="http://image.tmdb.org/t/p/w500//iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"/>
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

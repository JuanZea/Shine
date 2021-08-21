<template>
  <div class="h-full bg-poco flex flex-col">
    <div class="h-72 bg-orange-600">
      <carousel/>
    </div>
    <div class="flex-grow bg-poco shadow-t relative ">
      <div class="bg-poco box-shadow m-10 flex-grow">
          <img width="160" height="242" src="https://cuevana3.io/wp-content/uploads/2021/08/righteous-blood-47392-poster-200x300.jpg" data-src="https://cuevana3.io/wp-content/uploads/2021/08/righteous-blood-47392-poster-200x300.jpg" class="lazy attachment-thumbnail size-thumbnail wp-post-image" alt="img">
        </div>



        <img width="160" height="242" src="https://cuevana3.io/wp-content/uploads/2021/08/seven-days-war-47403-poster-200x300.jpg" data-src="https://cuevana3.io/wp-content/uploads/2021/08/seven-days-war-47403-poster-200x300.jpg" class="lazy attachment-thumbnail size-thumbnail wp-post-image" alt="img">
        <img width="160" height="242" src="https://cuevana3.io/wp-content/uploads/2021/04/ironbark-el-espia-ingles-41153-poster-200x300.jpg" data-src="https://cuevana3.io/wp-content/uploads/2021/04/ironbark-el-espia-ingles-41153-poster-200x300.jpg" class="lazy attachment-thumbnail size-thumbnail wp-post-image" alt="img">
      </div>
    </div>
</template>

<script>
import Carousel from "../../components/Carousel.vue";
export default {
  name: "Home",
  components: {Carousel}
}
</script>
<template>
  <div class="carousel relative rounded overflow-hidden shadow-xl mx-auto">
    <div class="carousel-inner relative overflow-hidden">
      <carousel-item
        v-for="(image, index) in images"
        :key="index"
        :idx="index"
        :image="image"
      />
      <ol class="m-0 absolute text-center z-10 bottom-2 left-0 right-0">
        <li
          :for="`carousel-${index - 1}`"
          class="inline-block mr-3"
          v-for="index in images.length"
          :key="index - 1"
        >
          <label
            :for="`carousel-${index - 1}`"
            class="
              carousel-bullet
              cursor-pointer
              text-xs text-white
              hover:text-violet
              font-bold
            "
          >
            <font-awesome-icon :icon="['fas', 'circle']" />
          </label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import CarouselItem from "./CarouselItem.vue";
export default {
  name: "Carousel",
  components: { CarouselItem },
  props: {
    images: {
      type: Array,
      default: null,
    },
  },
  setup(props) {
    const { images } = toRefs(props);
    const last = images.value.length - 1;
    return {
      last,
    };
  },
};
</script>

<style>
.carousel-bullet:hover {
  transition: 0.4s;
  margin: 0px !important;
}

.carousel-open:checked ~ .carousel-bullet {
  color: rgba(145, 42, 94, 1);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
</style>
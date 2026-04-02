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
              mx-0
              cursor-pointer
              text-xs text-white
              transition-all
              duration-300
              hover:text-purple-500
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

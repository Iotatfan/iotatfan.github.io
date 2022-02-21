<template>
  <div>
    <input
      class="carousel-open"
      :id="`carousel-${idx}`"
      type="radio"
      name="carousel"
      aria-hidden="true"
      hidden=""
      checked
    />
    <img
      class="
        carousel-item
        absolute
        opacity-0
        object-scale-down
        max-h-56
        xl:max-h-80
        2xl:max-h-96
        rounded-xl
        bg-center
      "
      :src="image"
    />
  </div>
</template>

<script>
export default {
  name: "Carousel Item",
  props: {
    image: {
      type: String,
      default: null,
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.carousel-item {
  transition: opacity 0.6s linear;
}
</style>
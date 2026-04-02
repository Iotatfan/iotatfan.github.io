<template>
  <a
    class="text-white glow text-lg sm:text-xl cursor-pointer mx-2 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white"
    :href="link"
  >
    <font-awesome-icon :icon="['fab', 'youtube']" />
  </a>
</template>

<script>
export default {
  name: "YouTubeIcon",
  props: {
    link: {
      type: String,
      default: null
    }
  }
};
</script>

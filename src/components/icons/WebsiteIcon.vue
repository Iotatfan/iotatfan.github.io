<template>
  <a
    class="text-white glow text-2xl sm:text-4xl cursor-pointer mx-2"
    :href="link"
  >
    <font-awesome-icon :icon="['fas', 'globe']" />
  </a>
</template>

<script>
export default {
  name: "Website Icon",
  props: {
    link: {
      type: String,
      default: null,
    },
  },
};
</script>
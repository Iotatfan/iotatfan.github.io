<template>
  <a
    class="text-white glow text-2xl sm:text-4xl cursor-pointer mx-1"
    :href="link"
  >
    <font-awesome-icon :icon="['fas', 'envelope']" />
  </a>
</template>

<script>
export default {
  name: "Email Icon",
  props: {
    link: {
      type: String,
      default: "mailto:imaniatfan@gmail.com"
    }
  },
  components: {},
};
</script>
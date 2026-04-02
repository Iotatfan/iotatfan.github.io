<template>
  <a
    class="glow mx-1 cursor-pointer text-2xl text-white sm:text-4xl"
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
      default: "mailto:imaniatfan@gmail.com",
    },
  },
  components: {},
};
</script>

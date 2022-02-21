<template>
  <a
    class="text-white glow text-2xl sm:text-4xl cursor-pointer mx-2"
    :href="link"
  >
    <font-awesome-icon :icon="['fab', 'linkedin']" />
  </a>
</template>

<script>
export default {
  name: "LinkedIn Icon",
  props: {
    link: {
      type: String,
      default: "https://www.linkedin.com/in/imani-atfan/",
    },
  },
};
</script>
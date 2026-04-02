<template>
  <a
    class="glow mx-2 cursor-pointer text-2xl text-white sm:text-4xl"
    :href="link"
  >
    <font-awesome-icon :icon="['fab', 'linkedin']" />
  </a>
</template>

<script>
export default {
  name: "LinkedInIcon",
  props: {
    link: {
      type: String,
      default: "https://www.linkedin.com/in/imani-atfan/",
    },
  },
};
</script>

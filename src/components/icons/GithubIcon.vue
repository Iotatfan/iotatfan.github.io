<template>
  <a
    class="glow mx-1 cursor-pointer text-lg text-white transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white sm:text-xl"
    :href="link"
  >
    <font-awesome-icon :icon="['fab', 'github']" />
  </a>
</template>

<script>
export default {
  name: "Github Icon",
  props: {
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

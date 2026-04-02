<template>
  <a
    class="text-white glow text-lg sm:text-xl cursor-pointer mx-1 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white"
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
      default: null
    }
  },
};
</script>

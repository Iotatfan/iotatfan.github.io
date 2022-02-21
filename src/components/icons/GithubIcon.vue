<template>
  <a
    class="text-white glow text-2xl sm:text-4xl cursor-pointer mx-1"
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
      default: "https://github.com/Iotatfan"
    }
  },
};
</script>
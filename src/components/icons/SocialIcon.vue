<template>
  <a
    v-if="link"
    :href="link"
    class="glow inline-flex items-center justify-center text-white transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white"
  >
    <font-awesome-icon :icon="icon" />
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    icon: {
      type: [Array, Object, String],
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <button
    class="
      font-mono
      font-bold
      text-3xl text-center text-white
      glow
      hover:ring-transparent
    "
    v-text="text"
  />
</template>

<script>
export default {
  name: "Text Button",
  props: {
    text: {
      type: String,
      default: "Placeholder Text"
    }
  },
};
</script>

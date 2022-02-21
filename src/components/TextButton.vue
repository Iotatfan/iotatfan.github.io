<template>
  <button
    class="
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

<style scoped>
button {
  font-family: "Courier New", Courier, monospace !important;
}
</style>
<template>
  <button
    :class="buttonClasses"
    type="button"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  emits: ["click"],
  props: {
    label: {
      type: String,
      default: "Button"
    },
    buttonType: {
      type: String,
      default: ""
    }
  },
  computed: {
    buttonClasses() {
      return [
        "inline-flex transform items-center justify-center rounded-full border border-white border-opacity-70 bg-transparent px-5 py-3 text-base uppercase tracking-wider text-white transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-opacity-100",
        {
          "border-transparent": this.buttonType === "no-border"
        }
      ];
    }
  }
};
</script>

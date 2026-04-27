<template>
  <span
    class="inline-flex cursor-default items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
  >
    {{ skill }}
  </span>
</template>

<script>
export default {
  name: "SkillLabel",
  props: {
    skill: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section
    id="experience"
    class="w-full max-w-5xl"
  >
    <div class="px-6 text-left md:px-8">
      <h2 class="mb-6 text-xl text-center font-black tracking-[0.2em] text-white md:text-2xl">
        Experience
      </h2>

      <div class="space-y-8">
        <article
          v-for="(experience, index) in experiences"
          :key="`${experience.jobTitle}-${experience.companyName}-${index}`"
          class="text-[#f3f6ff]"
        >
          <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 class="m-0 text-md font-bold">
              {{ experience.jobTitle }}
            </h3>
            <p class="m-0 text-sm font-semibold tracking-[0.14em] text-[#c2d0ff] whitespace-nowrap">
              {{ experience.startDate }} - {{ experience.endDate }}
            </p>
          </div>

          <p class="m-0 mt-1 text-base font-semibold text-[#dbe4ff]">
            {{ experience.companyName }}
          </p>

          <p class="mt-3 text-base leading-relaxed text-[#f3f6ff] opacity-80">
            {{ experience.description.join(" ") }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceSection",
  props: {
    experiences: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

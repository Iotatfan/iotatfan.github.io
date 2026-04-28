<template>
  <section
    id="experience"
    class="w-full max-w-5xl"
  >
    <div class="px-6 text-left md:px-8">
      <h2 class="mb-6 text-center text-xl font-black tracking-[0.2em] md:text-2xl">Experience</h2>

      <div class="space-y-8">
        <article
          v-for="(experience, index) in experiences"
          :key="`${experience.jobTitle}-${experience.companyName}-${index}`"
          class="text-white"
        >
          <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 class="text-md m-0 font-bold">
              {{ experience.jobTitle }}
            </h3>
            <p class="m-0 whitespace-nowrap text-sm font-semibold tracking-[0.14em] text-gray-300">
              {{ experience.startDate }} - {{ experience.endDate }}
            </p>
          </div>

          <p class="m-0 mt-1 text-base font-semibold">
            {{ experience.companyName }}
          </p>

          <p class="mt-3 text-base leading-relaxed text-gray-300">
            {{ experience.description.join(" ") }}
          </p>

          <div
            v-if="experience.skills && experience.skills.length"
            class="mt-4 flex flex-wrap gap-2"
          >
            <SkillLabel
              v-for="skill in experience.skills"
              :key="skill"
              :skill="skill"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import SkillLabel from "./SkillLabel.vue";

export default {
  name: "ExperienceSection",
  components: {
    SkillLabel,
  },
  props: {
    experiences: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

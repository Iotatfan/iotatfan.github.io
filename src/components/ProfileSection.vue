<template>
  <section
    class="flex flex-1 flex-col items-center gap-1 text-left md:sticky md:top-0 md:max-h-screen md:items-start md:gap-2 md:overflow-y-auto md:py-12 md:text-right"
  >
    <div class="text-2xl font-thin md:text-4xl">MUHAMMAD</div>
    <div class="text-4xl font-black md:text-8xl">IQBAL</div>
    <div class="text-2xl font-thin md:text-4xl">IMANI ATFAN</div>
    <p class="m-0 max-w-md text-center text-base md:text-left md:text-lg">
      QA Engineer focused on system reliability and user experience, with hands-on frontend
      and backend coding experience. Enjoys building systems and playing story-driven games.
    </p>
    <div class="flex w-full flex-row justify-center gap-3 pt-4 md:mt-auto">
      <SocialIcon
        :icon="['fab', 'github']"
        link="https://github.com/Iotatfan"
        class="text-2xl transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white md:text-3xl"
      />
      <SocialIcon
        :icon="['fab', 'linkedin']"
        link="https://www.linkedin.com/in/imani-atfan/"
        class="text-2xl transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white md:text-3xl"
      />
      <SocialIcon
        :icon="['fas', 'envelope']"
        link="mailto:imaniatfan@gmail.com"
        class="text-2xl transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white md:text-3xl"
      />
    </div>
  </section>
</template>

<script>
import SocialIcon from "@/components/icons/SocialIcon.vue";

export default {
  name: "ProfileSection",
  components: {
    SocialIcon,
  },
};
</script>

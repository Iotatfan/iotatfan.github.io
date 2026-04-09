<template>
  <main class="flex w-full flex-col items-center bg-home-radial px-6 pb-10 text-[#f3f6ff]">
    <section class="flex min-h-screen w-full max-w-6xl flex-col pt-32 md:pt-40">
      <div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-5">
        <div
          class="flex flex-col items-center gap-1 text-right md:items-end md:gap-2 md:text-right"
        >
          <div class="text-2xl font-thin md:text-4xl">MUHAMMAD</div>
          <div class="text-4xl font-black md:text-8xl">IQBAL</div>
          <div class="text-2xl font-thin md:text-4xl">IMANI ATFAN</div>
        </div>
        <div
          class="h-px w-4/5 max-w-md md:h-28 md:w-px"
          aria-hidden="true"
        ></div>
        <p class="m-0 max-w-2xl text-center text-base md:text-left md:text-lg">
          QA Engineer focused on system reliability and user experience, with hands-on frontend and
          backend coding experience. Enjoys building systems and playing story-driven games.
        </p>
      </div>

      <footer class="mt-auto flex flex-col items-center gap-4 pb-10">
        <div class="flex gap-3">
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
        <button
          type="button"
          class="animate-bounce text-xs font-semibold transition hover:text-white md:text-sm"
          @click="scrollToProjects"
        >
          SCROLL TO PROJECTS
        </button>
      </footer>
    </section>

    <ProjectSection
      ref="projectSection"
      class="mt-16"
      :projects="projects"
    />
  </main>
</template>

<script>
import ProjectSection from "@/components/ProjectSection.vue";
import SocialIcon from "@/components/icons/SocialIcon.vue";
import projectsData from "@/assets/projects.json";

const normalizeOptionalLink = (value) => {
  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();
  if (trimmedValue.length === 0) {
    return null;
  }

  return trimmedValue;
};

const resolveProjectImage = (image) =>
  image.startsWith("http://") || image.startsWith("https://") ? image : require(`@/assets/${image}`);

export default {
  components: {
    ProjectSection,
    SocialIcon,
  },
  data() {
    return {
      projects: projectsData.map((project) => ({
        title: project.name,
        description: project.detail,
        images: (project.images || [])
          .filter((image) => image && image.trim().length > 0)
          .map((image) => resolveProjectImage(image)),
        links: {
          repo: normalizeOptionalLink(project.link?.repo),
          site: normalizeOptionalLink(project.link?.site),
          demo: normalizeOptionalLink(project.link?.demo),
        },
      })),
    };
  },
  methods: {
    scrollToProjects() {
      this.$nextTick(() => {
        if (this.$refs.projectSection && this.$refs.projectSection.$el) {
          this.$refs.projectSection.$el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    },
  },
};
</script>

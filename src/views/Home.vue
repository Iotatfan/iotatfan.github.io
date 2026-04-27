<template>
  <main
    class="flex min-h-screen w-full flex-col items-center bg-home-radial px-6 text-[#f3f6ff] md:h-screen md:pb-0"
  >
    <div class="flex w-full max-w-6xl flex-1 flex-col justify-center py-16 md:min-h-0 md:py-0">
      <div
        class="flex w-full flex-1 flex-col items-center gap-4 md:min-h-0 md:flex-row md:items-stretch md:gap-5 md:overflow-hidden"
      >
        <ProfileSection />
        <div
          class="h-px w-4/5 max-w-md md:h-28 md:w-px"
          aria-hidden="true"
        ></div>
        <section
          ref="scrollPanel"
          class="m-0 max-w-2xl text-center text-base md:max-h-screen md:flex-1 md:self-stretch md:overflow-y-auto md:py-12 md:pr-4 md:text-left md:text-lg"
        >
          <ExperienceSection :experiences="experiences" />
          <ProjectSection
            ref="projectSection"
            class="mt-16"
            :projects="projects"
          />
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import ProfileSection from "@/components/ProfileSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import experiencesData from "@/assets/experiences.json";
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
  image.startsWith("http://") || image.startsWith("https://")
    ? image
    : require(`@/assets/${image}`);

export default {
  components: {
    ProfileSection,
    ExperienceSection,
    ProjectSection,
  },
  data() {
    return {
      experiences: experiencesData.map((experience) => ({
        jobTitle: experience.jobTitle,
        companyName: experience.companyName,
        startDate: experience.startDate,
        endDate: experience.endDate,
        description: Array.isArray(experience.description) ? experience.description : [],
        skills: experience.skills || [],
      })),
      projects: projectsData.map((project) => ({
        title: project.name,
        description: project.detail,
        images: (project.images || [])
          .filter((image) => image && image.trim().length > 0)
          .map((image) => resolveProjectImage(image)),
        stacks: project.stacks || [],
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
    handleGlobalScroll(e) {
      const rightPanel = this.$refs.scrollPanel;
      if (rightPanel && rightPanel.scrollHeight > rightPanel.clientHeight) {
        e.preventDefault();
        rightPanel.scrollTop += e.deltaY;
      }
    },
  },
  mounted() {
    window.addEventListener("wheel", this.handleGlobalScroll, { passive: false });
  },
  beforeUnmount() {
    window.removeEventListener("wheel", this.handleGlobalScroll);
  },
};
</script>

<style scoped>
/* Hide scrollbars while keeping scroll functionality */
::-webkit-scrollbar {
  display: none;
}

/* Firefox */
section {
  scrollbar-width: none;
}
</style>

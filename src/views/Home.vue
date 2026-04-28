<template>
  <main
    class="flex min-h-screen w-full flex-col items-center bg-home-radial bg-fixed px-6 text-[#f3f6ff] md:pb-0"
  >
    <div class="flex w-full max-w-6xl flex-1 flex-col justify-center py-16 md:py-0">
      <div
        class="flex w-full flex-1 flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-5"
      >
        <ProfileSection />
        <div
          class="h-px w-4/5 max-w-md md:h-28 md:w-px"
          aria-hidden="true"
        ></div>
        <section
          class="m-0 max-w-2xl text-center text-base md:flex-1 md:self-stretch md:py-12 md:pr-4 md:text-left md:text-lg"
        >
          <ExperienceSection :experiences="experiences" />
          <ProjectSection
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
};
</script>

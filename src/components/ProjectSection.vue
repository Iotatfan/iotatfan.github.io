<template>
  <section
    id="projects"
    class="w-full max-w-6xl items-center justify-center"
  >
    <h2 class="mb-5 text-center text-xl font-bold tracking-wide text-white md:text-2xl">
      Projects
    </h2>
    <div class="grid grid-cols-1 gap-6">
      <article
        v-for="(project, index) in projects"
        :key="project.title + index"
        class="mx-auto w-full max-w-4xl rounded-2xl border border-white/20 bg-[#1d3c78] p-4 shadow-xl backdrop-blur-sm"
      >
        <h3 class="mb-3 text-center text-md font-bold text-white">{{ project.title }}</h3>
        <div class="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <img
            v-for="(image, imageIndex) in project.images"
            :key="image + imageIndex"
            :src="image"
            :alt="`${project.title} image ${imageIndex + 1}`"
            class="hover:cursor-pointer hover:scale-110 duration-150 ease-in-out h-40 w-full rounded-lg object-cover"
            @click="openImagePopup(image, project.title, imageIndex)"
          />
        </div>
        <p class="m-0 text-base leading-relaxed text-white md:text-base">{{ project.description }}</p>
        <div
          v-if="project.links && (project.links.demo || project.links.site || project.links.repo)"
          class="mt-4 flex items-center justify-end gap-3"
        >
          <SocialIcon
            v-if="project.links.demo"
            :icon="['fab', 'youtube']"
            :link="project.links.demo"
          />
          <SocialIcon
            v-if="project.links.site"
            :icon="['fas', 'link']"
            :link="project.links.site"
          />
          <SocialIcon
            v-if="project.links.repo"
            :icon="['fab', 'github']"
            :link="project.links.repo"
          />
        </div>
      </article>
    </div>

    <div
      v-if="zoomedImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      @click="closeImagePopup"
    >
      <button
        type="button"
        class="absolute right-4 top-4 rounded bg-black/60 px-3 py-1 text-lg text-white transition hover:bg-black/80"
        aria-label="Close image popup"
        @click.stop="closeImagePopup"
      >
        x
      </button>
      <img
        :src="zoomedImage"
        :alt="zoomedImageAlt"
        class="max-h-[90vh] w-auto max-w-[95vw] rounded-xl object-contain shadow-2xl"
        @click.stop
      />
    </div>
  </section>
</template>

<script>
import SocialIcon from "./icons/SocialIcon.vue";

export default {
  name: "ProjectSection",
  components: {
    SocialIcon,
  },
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      zoomedImage: null,
      zoomedImageAlt: "",
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleEscapeKey);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleEscapeKey);
  },
  methods: {
    openImagePopup(image, title, imageIndex) {
      this.zoomedImage = image;
      this.zoomedImageAlt = `${title} image ${imageIndex + 1}`;
    },
    closeImagePopup() {
      this.zoomedImage = null;
      this.zoomedImageAlt = "";
    },
    handleEscapeKey(event) {
      if (event.key === "Escape" && this.zoomedImage) {
        this.closeImagePopup();
      }
    },
  },
};
</script>

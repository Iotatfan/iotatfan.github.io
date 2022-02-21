<template>
  <div class="flex flex-col justify-between min-h-screen" ref="vantaRef">
    <header class="mx-5">
      <h1 class="font-bold text-4xl md:text-5xl text-center text-white">
        MUHAMMAD IQBAL IMANI ATFAN
      </h1>
      <div>
        <VueWriter
          :array="arr"
          caret="cursor"
          class="mx-5 text-2xl md:text-3xl font-semibold text-white"
        >
        </VueWriter>
      </div>
    </header>
    <footer class="flex flex-col mb-8">
      <portfolio />
      <div class="flex flex-row mx-auto">
        <github-icon />
        <linked-in-icon />
        <email-icon />
      </div>
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import * as THREE from "three/build/three.min";
import NET from "vanta/dist/vanta.net.min";
import GithubIcon from "../components/icons/GithubIcon.vue";
import LinkedInIcon from "../components/icons/LinkedInIcon.vue";
import EmailIcon from "../components/icons/EmailIcon.vue";

const Portfolio = defineAsyncComponent(() =>
  import("../components/Overlay.vue")
);

export default {
  components: {
    Portfolio,
    GithubIcon,
    LinkedInIcon,
    EmailIcon,
  },
  setup() {
    const arr = [
      "I'm programmer",
      "I'm currently unemployed",
      "I love playing games",
    ];

    return {
      arr,
    };
  },
  methods: {},
  mounted() {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      THREE: THREE,
      gyroControl: true,
      points: 10.0,
    });
  },
  beforeUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style>
.glow {
  opacity: 0.75;
  transition: 0.3s !important;
}

.glow:hover {
  opacity: 1;
}

.is-typed {
  font-family: "Courier New", Courier, monospace !important;
}

.is-typed span.typed {
  color: white !important;
}

header {
  padding-top: 40vh;
}

footer {
  padding-bottom: 10px;
}
</style>
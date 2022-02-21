<template>
  <div>
    <div class="mx-auto mb-3">
      <text-button @click="showPortofolio" :text="`My Projects`" />
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="hidePortofolio">
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="px-1 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0 bg-black bg-opacity-70" />
            </TransitionChild>
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-90"
            >
              <div
                class="
                  inline-flex
                  flex-col
                  justify-between
                  w-11/12
                  2xl:w-8/12
                  h-screen
                  px-3
                  py-6
                  my-2
                  overflow-hidden
                  text-left
                  align-baseline
                  transition-all
                  transform
                  bg-black bg-opacity-70
                  border-2 border-violet
                  shadow-2xl
                "
              >
                <div class="flex lg:flex-row flex-col justify-around mt-5">
                  <carousel :images="portoData[0].images" />
                  <div
                    class="flex flex-col mt-5 xl:mt-0 ml-0 xl:ml-5 lg:w-5/12"
                  >
                    <DialogTitle
                      as="h3"
                      class="
                        text-3xl
                        xl:text-4xl
                        text-center
                        xl:text-left
                        font-bold
                        leading-6
                        text-white
                      "
                    >
                      {{ portoData[0].name }}
                    </DialogTitle>
                    <p
                      class="
                        pt-3
                        text-xl
                        xl:text-2xl
                        text-center
                        xl:text-left
                        text-white
                        font-medium
                      "
                    >
                      {{ portoData[0].detail }}
                    </p>
                    <div
                      class="
                        mt-auto
                        flex flex-row
                        justify-center
                        xl:justify-start
                      "
                    >
                      <website-icon
                        :link="portoData[0].link.site"
                        :class="{
                          'pointer-events-none': portoData[0].link.site
                            ? true
                            : false,
                        }"
                      />
                      <github-icon
                        :link="portoData[0].link.repo"
                        :class="{
                          'pointer-events-none': portoData[0].link.repo
                            ? true
                            : false,
                        }"
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex flex-row justify-around glow">
                  <text-button :text="`Previous`" />
                  <text-button @click="hidePortofolio" :text="`Close`" />
                  <text-button :text="`Next`" />
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import { ref, defineAsyncComponent } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import TextButton from "./TextButton.vue";
import PortoData from "../assets/porto.json";
import GithubIcon from "./icons/GithubIcon.vue";
// import Carousel from "./Carousel.vue";
import WebsiteIcon from "./icons/WebsiteIcon.vue";
const Carousel = defineAsyncComponent(() => import("./Carousel.vue"));

export default {
  name: "Overlay",
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    TextButton,
    GithubIcon,
    Carousel,
    WebsiteIcon,
  },
  setup() {
    const isOpen = ref(false);
    const portoData = PortoData;

    return {
      isOpen,
      portoData,
      hidePortofolio() {
        isOpen.value = false;
      },
      showPortofolio() {
        isOpen.value = true;
      },
    };
  },
};
</script>

<style scoped>
.h-screen {
  margin-top: 12px;
  height: 96vh !important;
}

.w-full {
  width: 98%;
}

p,
h3 {
  font-family: "Courier New", Courier, monospace !important;
}
</style>

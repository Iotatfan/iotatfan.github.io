<template>
  <main
    class="flex min-h-screen flex-col items-center justify-start bg-home-radial px-6 pb-10 pt-32 text-[#f3f6ff] md:pt-40">
    <section class="flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:flex-row md:gap-5">
      <div class="flex flex-col items-end gap-1 text-right md:items-end md:gap-2 md:text-right">
        <div class="text-2xl font-thin md:text-4xl">MUHAMMAD</div>
        <div class="text-4xl font-black md:text-8xl">IQBAL</div>
        <div class="text-2xl font-thin md:text-4xl">IMANI ATFAN</div>
      </div>
      <div class="h-px w-4/5 max-w-md md:h-28 md:w-px" aria-hidden="true"></div>
      <p
        class="m-0 max-w-2xl text-center text-base md:text-left md:text-lg">
        QA Engineer focused on system reliability and user experience, with hands-on frontend and backend coding
        experience. Enjoys building systems and playing story-driven games.
      </p>
    </section>

    <footer class="mt-auto flex flex-col items-center gap-4">
      <div class="flex gap-3">
        <a class="text-2xl text-[rgba(223,231,246,0.82)] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white md:text-3xl"
          href="https://github.com/Iotatfan" aria-label="GitHub">
          <fa-icon :icon="['fab', 'github']" />
        </a>
        <a class="text-2xl text-[rgba(223,231,246,0.82)] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white md:text-3xl"
          href="https://www.linkedin.com/in/imani-atfan/" aria-label="LinkedIn">
          <fa-icon :icon="['fab', 'linkedin']" />
        </a>
        <a class="text-2xl text-[rgba(223,231,246,0.82)] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:text-white md:text-3xl"
          href="mailto:imaniatfan@gmail.com" aria-label="Email">
          <fa-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
      <io-button label="Hobby Collection" buttonType="no-border"
        class="px-0 py-0 text-base font-semibold tracking-[0.11em] text-[#eef4ff] opacity-95 md:text-lg"
        @click="scrollDown" />
    </footer>
  </main>
</template>

<script>
import IoButton from '@/components/Button.vue'

export default {
  components: {
    IoButton
  },
  methods: {
    scrollDown: function () {
      window.location.href = 'https://iotatfan.github.io/hobby-collection/'
    }
  }
};
</script>

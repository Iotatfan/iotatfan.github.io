<template>
  <div class="home-layout flex flex-col">
    <div class="flex blank-header"/>
    <div>
      <h1 class="content-header">
        MUHAMMAD IQBAL IMANI ATFAN
      </h1>
      <div>
        <!-- <VueWriter
          :array="arr"
          caret="cursor"
          class="mx-5 text-2xl md:text-3xl font-semibold text-white"
        >
        </VueWriter> -->
      </div>
    </div>

    <div class="bottom-actions">
      <div class="flex flex-row justify-content-center">
        <a href="https://github.com/Iotatfan">
          <fa-icon
            class="icon-glow"
            :icon="['fab', 'github']"
          />
        </a>
        <a href="https://www.linkedin.com/in/imani-atfan/">
          <fa-icon
            class="icon-glow"
            :icon="['fab', 'linkedin']"
          />
        </a>
        <a href="mailto:imaniatfan@gmail.com">
          <fa-icon
            class="icon-glow"
            :icon="['fas', 'envelope']"
          />
        </a>
      </div>
      <div class="flex flex-row justify-content-center">
        <io-button
          label="Hobby Collection"
          buttonType="no-border"
          @click="scrollDown"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IoButton from '@/external/components/button/Button.vue'

export default {
  components: {
    IoButton
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
  methods: {
    scrollDown: function() {
      window.location.href = 'https://iotatfan.github.io/hobby-collection/'
    }
  },
  mounted() {

  },
};
</script>

<style>
.home-layout {
  min-height: 100vh;
}

.bottom-actions {
  margin-top: auto;
  padding-bottom: 2rem;
}

.icon-glow {
  font-size: 3rem;
  padding-left: .5rem;
  padding-right: .5rem;
  color: white !important;
  opacity: 0.75;
  transition: 0.3s !important;
}

.icon-glow:hover {
  opacity: 1;
}

.io-btn {
  font-family: 'Courier New', Courier, monospace !important;
}

/* 
.is-typed {
  font-family: "Courier New", Courier, monospace !important;
}

.is-typed span.typed {
  color: white !important;
}
*/
</style>

<template>
  <transition name="loader">
    <div
      v-if="visible"
      class="fixed inset-0 z-[300] flex items-center justify-center bg-[#020617]"
    >
      <!-- glow -->

      <div
        class="absolute h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />

      <!-- content -->

      <div class="relative z-10 text-center">
        <!-- logo -->

        <div
          class="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-500 to-cyan-400 text-4xl font-black text-white"
        >
          N
        </div>

        <!-- title -->

        <h2 class="mb-3 text-5xl font-black">
          NovaCare
        </h2>

        <p class="mb-10 text-slate-400">
          Loading Experience...
        </p>

        <!-- loader -->

        <div
          class="mx-auto h-2 w-56 overflow-hidden rounded-full bg-white/10"
        >
          <div class="loader-bar h-full w-full" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  visible: Boolean,
})
</script>

<style scoped>
.loader-enter-active,
.loader-leave-active {
  transition:
    opacity 0.5s ease,
    visibility 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}

.loader-bar {
  background:
    linear-gradient(
      90deg,
      #3b82f6,
      #22d3ee
    );

  animation: loading 1.8s ease infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
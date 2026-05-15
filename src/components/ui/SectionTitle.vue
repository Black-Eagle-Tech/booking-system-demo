<template>
  <div class="mx-auto mb-16 max-w-3xl text-center">
    <!-- badge -->

    <div
      class="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
    >
      {{ badge }}
    </div>

    <!-- title -->

    <h2
      class="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl"
    >
      {{ title }}
    </h2>

    <!-- description -->

    <p
      class="text-base leading-relaxed text-slate-400 md:text-xl"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  badge: String,
  title: String,
  description: String,
})
</script>
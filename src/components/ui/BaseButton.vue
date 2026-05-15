<template>
  <button
    :class="[
      'group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-3 font-semibold transition-all duration-300',
      variantClasses
    ]"
  >
    <!-- glow -->

    <div
      class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :class="glowClasses"
    />

    <!-- content -->

    <span class="relative z-10">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})

const variantClasses = computed(() => {
  const variants = {
    primary:
      'bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/20',

    secondary:
      'glass-card text-white hover:bg-white/10',

    ghost:
      'text-white hover:bg-white/5',
  }

  return variants[props.variant]
})

const glowClasses = computed(() => {
  const variants = {
    primary:
      'bg-gradient-to-r from-blue-400/20 to-cyan-300/20',

    secondary:
      'bg-white/5',

    ghost:
      'bg-white/5',
  }

  return variants[props.variant]
})
</script>
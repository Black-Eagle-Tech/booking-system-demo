<template>
  <div
    class="spotlight glass-card glow-border"
    @mousemove="handleMouseMove"
    @mouseleave="resetMouse"
    :style="spotlightStyle"
  >
    <slot />
  </div>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue'

const mouseX = ref(50)
const mouseY = ref(50)

const handleMouseMove = (event) => {
  const rect =
    event.currentTarget.getBoundingClientRect()

  mouseX.value =
    ((event.clientX - rect.left) / rect.width) * 100

  mouseY.value =
    ((event.clientY - rect.top) / rect.height) * 100
}

const resetMouse = () => {
  mouseX.value = 50
  mouseY.value = 50
}

const spotlightStyle = computed(() => ({
  background: `
    radial-gradient(
      circle at ${mouseX.value}% ${mouseY.value}%,
      rgba(59,130,246,0.14),
      transparent 45%
    ),
    var(--card-bg)
  `,
}))
</script>
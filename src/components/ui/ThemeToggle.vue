<template>
  <button
    class="glass-card flex h-12 w-12 items-center justify-center rounded-2xl"
    @click="toggleTheme"
  >
    <Sun
      v-if="theme === 'dark'"
      class="h-5 w-5"
    />

    <Moon
      v-else
      class="h-5 w-5"
    />
  </button>
</template>

<script setup>
import {
  Moon,
  Sun,
} from 'lucide-vue-next'

import { useTheme } from '@/composables/useTheme'

const {
  theme,
  toggleTheme,
} = useTheme()
</script>
<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <button
      v-for="slot in timeSlots"
      :key="slot"
      @click="$emit('select', slot)"
      class="glass-card hover:border-blue-400 rounded-2xl p-4 transition-all duration-300"
    >
      {{ slot }}
    </button>
  </div>
</template>

<script setup>
import { timeSlots } from '../data/timeSlots'

defineEmits(['select'])
</script>
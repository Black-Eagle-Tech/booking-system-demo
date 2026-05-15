<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
    <button
      v-for="item in availableDates"
      :key="item.id"
      @click="$emit('select', item)"
      class="group glass-card hover:border-blue-400 rounded-3xl p-5 transition-all duration-300"
    >
      <div class="text-center">
        <p class="mb-2 text-sm text-slate-400">
          {{ item.day }}
        </p>

        <h3
          class="mb-1 text-3xl font-black transition-colors duration-300 group-hover:text-blue-400"
        >
          {{ item.date }}
        </h3>

        <p class="text-sm text-slate-500">
          {{ item.month }}
        </p>
      </div>
    </button>
  </div>
</template>

<script setup>
import { availableDates } from '../data/availableDates'

defineEmits(['select'])
</script>
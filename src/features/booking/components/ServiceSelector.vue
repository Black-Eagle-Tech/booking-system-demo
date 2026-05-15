<template>
  <div class="grid gap-4">
    <button
      v-for="service in bookingServices"
      :key="service.id"
      @click="$emit('select', service)"
      class="glass-card hover:border-blue-400 flex items-center justify-between rounded-3xl p-5 text-left transition-all duration-300"
    >
      <div>
        <h3 class="mb-2 text-xl font-bold">
          {{ service.title }}
        </h3>

        <p class="text-slate-400">
          {{ service.duration }}
        </p>
      </div>

      <div class="text-right">
        <p class="text-2xl font-black text-blue-400">
          {{ service.price }}
        </p>
      </div>
    </button>
  </div>
</template>

<script setup>
import { bookingServices } from '../data/bookingServices'

defineEmits(['select'])
</script>
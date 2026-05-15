<template>
  <BaseCard class="sticky top-28 p-8">
    <div class="mb-8">
      <div
        class="mb-4 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300"
      >
        Live Summary
      </div>

      <h3 class="text-3xl font-black">
        Booking Summary
      </h3>
    </div>

    <div class="space-y-6">
      <div>
        <p class="mb-2 text-sm text-slate-400">
          Service
        </p>

        <p class="font-semibold">
          {{ service?.title || 'Not selected' }}
        </p>
      </div>

      <div>
        <p class="mb-2 text-sm text-slate-400">
          Duration
        </p>

        <p class="font-semibold">
          {{ service?.duration || '--' }}
        </p>
      </div>

      <div>
        <p class="mb-2 text-sm text-slate-400">
          Date
        </p>

        <p class="font-semibold">
          {{ formattedDate }}
        </p>
      </div>

      <div>
        <p class="mb-2 text-sm text-slate-400">
          Time
        </p>

        <p class="font-semibold">
          {{ time || '--' }}
        </p>
      </div>

      <div class="border-t border-white/10 pt-6">
        <p class="mb-2 text-sm text-slate-400">
          Total
        </p>

        <p class="text-4xl font-black text-blue-400">
          {{ service?.price || '--' }}
        </p>
      </div>

      <div
        class="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm text-blue-200"
      >
        Your appointment details update automatically as selections are made.
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { computed } from 'vue'

import BaseCard from '@/components/ui/BaseCard.vue'

const props = defineProps({
  service: Object,
  time: String,
  date: Object,
})

const formattedDate = computed(() => {
  if (!props.date) {
    return '--'
  }

  return `${props.date.day} ${props.date.date} ${props.date.month}`
})
</script>
<template>
  <BaseCard class="p-8">
    <h3 class="mb-6 text-2xl font-black">
      Booking Summary
    </h3>

    <div class="space-y-4">
      <div>
        <p class="text-sm text-slate-400">
          Service
        </p>

        <p class="font-semibold">
          {{ service?.title || 'Not selected' }}
        </p>
      </div>

      <div>
        <p class="text-sm text-slate-400">
          Duration
        </p>

        <p class="font-semibold">
          {{ service?.duration || '--' }}
        </p>
      </div>

      <div>
        <p class="text-sm text-slate-400">
          Time
        </p>

        <p class="font-semibold">
          {{ time || '--' }}
        </p>
      </div>

      <div class="pt-4">
        <p class="text-sm text-slate-400">
          Total
        </p>

        <p class="text-3xl font-black text-blue-400">
          {{ service?.price || '--' }}
        </p>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'

defineProps({
  service: Object,
  time: String,
})
</script>
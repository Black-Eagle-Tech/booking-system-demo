<template>
  <div class="grid gap-6 md:grid-cols-3">
    <BaseCard class="shimmer p-6 md:p-8">
      <p class="mb-3 text-slate-400">
        Total Appointments
      </p>

      <h2 class="text-5xl font-black">
        {{ appointments }}+
      </h2>

      <p class="mt-4 text-sm text-green-400">
        +18% this month
      </p>
    </BaseCard>

    <BaseCard class="shimmer p-6 md:p-8">
      <p class="mb-3 text-slate-400">
        Active Clients
      </p>

      <h2 class="text-5xl font-black">
        {{ clients }}
      </h2>

      <p class="mt-4 text-sm text-green-400">
        +12% this month
      </p>
    </BaseCard>

    <BaseCard class="shimmer p-6 md:p-8">
      <p class="mb-3 text-slate-400">
        Revenue
      </p>

      <h2 class="text-5xl font-black">
        ${{ revenue }}K
      </h2>

      <p class="mt-4 text-sm text-green-400">
        +24% this month
      </p>
    </BaseCard>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue'

import BaseCard from '@/components/ui/BaseCard.vue'

const appointments = ref(0)
const clients = ref(0)
const revenue = ref(0)

onMounted(() => {
  animateCounter(appointments, 124)
  animateCounter(clients, 89)
  animateCounter(revenue, 8.2)
})

const animateCounter = (
  target,
  finalValue,
) => {
  const duration = 1200
  const steps = 40

  const increment =
    finalValue / steps

  let current = 0

  const interval = setInterval(() => {
    current += increment

    if (current >= finalValue) {
      target.value = finalValue
      clearInterval(interval)
      return
    }

    target.value =
      typeof finalValue === 'number' &&
      String(finalValue).includes('.')
        ? current.toFixed(1)
        : Math.floor(current)
  }, duration / steps)
}
</script>
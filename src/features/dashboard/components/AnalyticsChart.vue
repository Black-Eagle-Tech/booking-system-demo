<template>
  <BaseCard class="p-6 md:p-8">
    <div class="mb-8">
      <h2 class="mb-2 text-3xl font-black">
        Weekly Analytics
      </h2>

      <p class="text-slate-400">
        Appointment growth overview
      </p>
    </div>

    <div class="flex h-72 items-end gap-4">
      <div
        v-for="(value, index) in chartData"
        :key="index"
        class="flex flex-1 flex-col items-center gap-3"
      >
        <div
          class="w-full rounded-t-3xl bg-gradient-to-t from-blue-500 to-cyan-400"
          :style="{
            height: `${value}%`,
          }"
        />

        <span class="text-sm text-slate-400">
          {{ labels[index] }}
        </span>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'

const chartData = [40, 70, 55, 90, 60, 80, 65]

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>
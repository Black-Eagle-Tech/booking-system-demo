<template>
  <BaseCard class="p-6 md:p-8">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h2 class="text-3xl font-black">
          Upcoming Appointments
        </h2>

        <p class="text-slate-400">
          Today's scheduled sessions
        </p>
      </div>

      <div
        class="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-300"
      >
        Today
      </div>
    </div>

    <div class="space-y-4">
      <div
        v-for="appointment in upcomingAppointments"
        :key="appointment.id"
        class="glass-card flex items-center justify-between p-5"
      >
        <div>
          <h3 class="mb-1 font-bold">
            {{ appointment.client }}
          </h3>

          <p class="text-sm text-slate-400">
            {{ appointment.service }}
          </p>
        </div>

        <div class="text-right">
          <p class="font-semibold text-blue-400">
            {{ appointment.time }}
          </p>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'

import { upcomingAppointments } from '../data/upcomingAppointments'
</script>
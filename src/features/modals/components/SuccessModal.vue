<template>
  <transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
    >
      <div
        class="glass-card glow-border relative w-full max-w-lg overflow-hidden rounded-[2rem] p-10"
      >
        <!-- glow -->

        <div
          class="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        />

        <!-- content -->

        <div class="relative z-10 text-center">
          <!-- icon -->

          <div
            class="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/20"
          >
            <Check class="h-12 w-12 text-blue-400" />
          </div>

          <!-- badge -->

          <div
            class="mb-6 inline-flex rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400"
          >
            Booking Confirmed
          </div>

          <!-- title -->

          <h2 class="mb-4 text-5xl font-black leading-tight">
            Appointment
            Confirmed
          </h2>

          <!-- description -->

          <p class="mx-auto mb-8 max-w-md text-slate-300">
            Your appointment has been successfully scheduled. A confirmation email has been sent.
          </p>

          <!-- booking id -->

          <div
            class="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p class="mb-2 text-sm text-slate-400">
              Booking ID
            </p>

            <p class="text-2xl font-black text-blue-400">
              #NC-2048
            </p>
          </div>

          <!-- actions -->

          <div class="flex flex-col gap-4 sm:flex-row">
            <BaseButton
              class="flex-1"
              @click="$emit('close')"
            >
              Back To Dashboard
            </BaseButton>

            <BaseButton
              variant="secondary"
              class="flex-1"
              @click="$emit('close')"
            >
              Book Another
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { Check } from 'lucide-vue-next'

import BaseButton from '@/components/ui/BaseButton.vue'

defineProps({
  open: Boolean,
})

defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
<template>
  <transition name="toast">
    <div
      v-if="show"
      class="glass-card glow-border fixed top-6 right-6 z-[200] w-full max-w-sm overflow-hidden rounded-3xl p-5"
    >
      <!-- glow -->

      <div
        class="absolute top-0 right-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"
      />

      <!-- content -->

      <div class="relative z-10 flex items-start gap-4">
        <!-- icon -->

        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-500/10"
        >
          <Check class="h-6 w-6 text-green-400" />
        </div>

        <!-- text -->

        <div class="flex-1">
          <h3 class="mb-1 font-bold">
            Appointment Scheduled
          </h3>

          <p class="text-sm text-slate-400">
            Your booking has been successfully confirmed.
          </p>
        </div>

        <!-- close -->

        <button
          class="text-slate-500 transition hover:text-white"
          @click="$emit('close')"
        >
          <X class="h-5 w-5" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {
  Check,
  X,
} from 'lucide-vue-next'

defineProps({
  show: Boolean,
})

defineEmits(['close'])
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
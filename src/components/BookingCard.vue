<template>
  <div class="glass rounded-3xl p-6">
    <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
    <p class="text-slate-300 mb-6">{{ description }}</p>

    <button class="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 transition">
      Book Appointment
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>

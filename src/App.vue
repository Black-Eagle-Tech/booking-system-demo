<template>
  <!-- loading -->

  <LoadingScreen
    :visible="loading"
  />

  <!-- app -->

  <MainLayout v-if="!loading">
    <RouterView v-slot="{ Component }">
      <transition
        name="page"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </MainLayout>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue'

import MainLayout from '@/layouts/MainLayout.vue'

import LoadingScreen from '@/features/system/components/LoadingScreen.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1800)
})
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
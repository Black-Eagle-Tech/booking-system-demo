<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- background -->

    <GlowBackground />

    <!-- navbar -->

    <AppNavbar />

    <!-- content -->

    <main class="relative z-10">
      <slot />
    </main>

    <!-- footer -->

    <AppFooter />
  </div>
</template>

<script setup>
import GlowBackground from '@/components/ui/GlowBackground.vue'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
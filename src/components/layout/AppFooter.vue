<template>
  <footer class="relative overflow-hidden border-t border-white/5 py-20">
    <!-- glow -->

    <div
      class="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
    />

    <Container>
      <div
        class="relative z-10 grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
      >
        <!-- brand -->

        <div>
          <div class="mb-6 flex items-center gap-3">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 font-black"
            >
              N
            </div>

            <div>
              <h2 class="text-2xl font-black">
                NovaCare
              </h2>

              <p class="text-sm text-slate-400">
                Premium Booking Platform
              </p>
            </div>
          </div>

          <p class="max-w-md text-slate-400">
            Modern booking experiences for clinics, coaches, consultants and wellness businesses.
          </p>
        </div>

        <!-- links -->

        <div>
          <h3 class="mb-5 text-lg font-bold">
            Platform
          </h3>

          <div class="space-y-3 text-slate-400">
            <p>Appointments</p>
            <p>Dashboard</p>
            <p>Analytics</p>
            <p>Clients</p>
          </div>
        </div>

        <div>
          <h3 class="mb-5 text-lg font-bold">
            Company
          </h3>

          <div class="space-y-3 text-slate-400">
            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
            <p>Pricing</p>
          </div>
        </div>

        <div>
          <h3 class="mb-5 text-lg font-bold">
            Resources
          </h3>

          <div class="space-y-3 text-slate-400">
            <p>Documentation</p>
            <p>Support</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>

      <!-- bottom -->

      <div
        class="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 md:flex-row"
      >
        <p>
          © 2026 NovaCare. All rights reserved.
        </p>

        <p>
          Designed for modern businesses.
        </p>
      </div>
    </Container>
  </footer>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
</script>
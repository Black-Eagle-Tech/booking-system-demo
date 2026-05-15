<template>
  <section
    v-reveal
    class="section-spacing"
  >
    <Container>
      <BaseCard class="relative overflow-hidden p-14 text-center">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10"
        />

        <div
          class="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div class="relative z-10">
          <h2 class="mb-6 text-5xl font-black leading-tight">
            Start Accepting

            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Bookings Today
            </span>
          </h2>

          <p class="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
            Modernize your business with a premium appointment experience designed for modern professionals.
          </p>

          <BaseButton>
            Get Started
          </BaseButton>
        </div>
      </BaseCard>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
</script>
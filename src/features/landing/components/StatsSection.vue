<template>
  <section class="px-6 py-10">
    <Container>
      <div class="grid gap-6 md:grid-cols-3">
        <BaseCard class="p-10 text-center">
          <h2 class="mb-3 text-6xl font-black">
            10K+
          </h2>

          <p class="text-slate-400">
            Appointments Scheduled
          </p>
        </BaseCard>

        <BaseCard class="p-10 text-center">
          <h2 class="mb-3 text-6xl font-black">
            98%
          </h2>

          <p class="text-slate-400">
            Client Satisfaction
          </p>
        </BaseCard>

        <BaseCard class="p-10 text-center">
          <h2 class="mb-3 text-6xl font-black">
            250+
          </h2>

          <p class="text-slate-400">
            Businesses Using NovaCare
          </p>
        </BaseCard>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
</script>
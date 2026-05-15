<template>
  <section
    v-reveal
    class="section-spacing"
  >
    <Container>
      <SectionTitle
        badge="Services"
        title="Designed For Modern Businesses"
        description="Perfect for clinics, coaches, consultants and wellness studios."
      />

      <div class="grid gap-6 md:grid-cols-3">
        <BaseCard
          v-for="service in services"
          :key="service.title"
          class="p-8"
        >
          <component
            :is="service.icon"
            class="mb-6 h-12 w-12 text-blue-400"
          />

          <h3 class="mb-4 text-2xl font-bold">
            {{ service.title }}
          </h3>

          <p class="text-slate-400">
            {{ service.description }}
          </p>
        </BaseCard>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

import { services } from '../data/services'
</script>
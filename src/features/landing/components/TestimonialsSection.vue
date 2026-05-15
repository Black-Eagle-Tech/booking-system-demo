<template>
  <section
    v-reveal
    class="section-spacing"
  >
    <Container>
      <SectionTitle
        badge="Testimonials"
        title="Loved By Modern Businesses"
        description="See why professionals choose NovaCare."
      />

      <div class="grid gap-6 md:grid-cols-3">
        <BaseCard
          v-for="item in testimonials"
          :key="item.name"
          class="p-8"
        >
          <p class="mb-6 text-slate-300">
            “{{ item.content }}”
          </p>

          <div>
            <h4 class="font-bold">
              {{ item.name }}
            </h4>

            <p class="text-sm text-slate-400">
              {{ item.role }}
            </p>
          </div>
        </BaseCard>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

import { testimonials } from '../data/testimonials'
</script>
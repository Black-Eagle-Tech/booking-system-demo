<template>
  <section
    v-reveal
    class="section-spacing"
  >
    <Container>
      <SectionTitle
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about the platform."
      />

      <div class="mx-auto max-w-4xl space-y-5">
        <BaseCard
          v-for="(item, index) in faqs"
          :key="index"
          class="overflow-hidden"
        >
          <button
            class="flex w-full items-center justify-between p-6 text-left"
            @click="toggleFaq(index)"
          >
            <span class="text-lg font-bold">
              {{ item.question }}
            </span>

            <Plus
              v-if="activeFaq !== index"
              class="h-5 w-5"
            />

            <Minus
              v-else
              class="h-5 w-5"
            />
          </button>

          <transition name="faq">
            <div
              v-if="activeFaq === index"
              class="px-6 pb-6"
            >
              <p class="leading-relaxed text-slate-400">
                {{ item.answer }}
              </p>
            </div>
          </transition>
        </BaseCard>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import {
  Minus,
  Plus,
} from 'lucide-vue-next'

import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const activeFaq = ref(0)

const toggleFaq = (index) => {
  activeFaq.value =
    activeFaq.value === index
      ? null
      : index
}

const faqs = [
  {
    question: 'Can I manage multiple staff members?',
    answer:
      'Yes, NovaCare supports multiple team members, schedules and appointment management.',
  },

  {
    question: 'Does the platform send reminders?',
    answer:
      'Automatic email reminders and booking confirmations are included in all plans.',
  },

  {
    question: 'Can clients book online?',
    answer:
      'Absolutely. Clients can schedule appointments directly from your booking page.',
  },

  {
    question: 'Is there calendar integration?',
    answer:
      'Yes, the platform supports integrations with external calendar systems.',
  },

  {
    question: 'Can I customize the branding?',
    answer:
      'Professional and Enterprise plans include custom branding options.',
  },
]
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
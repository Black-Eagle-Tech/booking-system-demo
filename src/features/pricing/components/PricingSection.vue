<template>
  <section
    v-reveal
    class="section-spacing"
  >
    <Container>
      <SectionTitle
        badge="Pricing"
        title="Simple Transparent Pricing"
        description="Flexible plans designed for modern clinics, coaches and service businesses."
      />

      <!-- pricing cards -->

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- starter -->

        <BaseCard class="p-8">
          <div class="mb-8">
            <h3 class="mb-3 text-3xl font-black">
              Starter
            </h3>

            <p class="text-slate-400">
              Perfect for small businesses.
            </p>
          </div>

          <div class="mb-8">
            <span class="text-6xl font-black">
              $29
            </span>

            <span class="text-slate-400">
              /month
            </span>
          </div>

          <div class="mb-10 space-y-4">
            <div
              v-for="feature in starterFeatures"
              :key="feature"
              class="flex items-center gap-3"
            >
              <Check class="h-5 w-5 text-green-400" />

              <span class="text-slate-300">
                {{ feature }}
              </span>
            </div>
          </div>

          <BaseButton class="w-full">
            Get Started
          </BaseButton>
        </BaseCard>

        <!-- professional -->

        <BaseCard
          class="relative scale-[1.02] border border-blue-500/30 p-8"
        >
          <!-- badge -->

          <div
            class="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Most Popular
          </div>

          <div class="mb-8">
            <h3 class="mb-3 text-3xl font-black">
              Professional
            </h3>

            <p class="text-slate-400">
              Best for growing businesses.
            </p>
          </div>

          <div class="mb-8">
            <span class="text-6xl font-black text-blue-400">
              $79
            </span>

            <span class="text-slate-400">
              /month
            </span>
          </div>

          <div class="mb-10 space-y-4">
            <div
              v-for="feature in proFeatures"
              :key="feature"
              class="flex items-center gap-3"
            >
              <Check class="h-5 w-5 text-green-400" />

              <span class="text-slate-300">
                {{ feature }}
              </span>
            </div>
          </div>

          <BaseButton class="pulse-glow w-full">
            Start Free Trial
          </BaseButton>
        </BaseCard>

        <!-- enterprise -->

        <BaseCard class="p-8">
          <div class="mb-8">
            <h3 class="mb-3 text-3xl font-black">
              Enterprise
            </h3>

            <p class="text-slate-400">
              Advanced features and support.
            </p>
          </div>

          <div class="mb-8">
            <span class="text-6xl font-black">
              Custom
            </span>
          </div>

          <div class="mb-10 space-y-4">
            <div
              v-for="feature in enterpriseFeatures"
              :key="feature"
              class="flex items-center gap-3"
            >
              <Check class="h-5 w-5 text-green-400" />

              <span class="text-slate-300">
                {{ feature }}
              </span>
            </div>
          </div>

          <BaseButton
            variant="secondary"
            class="w-full"
          >
            Contact Sales
          </BaseButton>
        </BaseCard>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next'

import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const starterFeatures = [
  'Unlimited Appointments',
  'Email Notifications',
  'Basic Analytics',
  'Client Management',
]

const proFeatures = [
  'Advanced Analytics',
  'Calendar Sync',
  'Automated Reminders',
  'Priority Support',
  'Custom Branding',
]

const enterpriseFeatures = [
  'Dedicated Manager',
  'Custom Integrations',
  'API Access',
  'Advanced Security',
  '24/7 Support',
]
</script>
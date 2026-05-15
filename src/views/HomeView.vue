<template>
  <div>
    <HeroSection />

    <ServicesSection />

    <PricingSection />

    <TestimonialsSection />

    <FaqSection />

    <CtaSection />
  </div>
</template>

<script setup>
import HeroSection from '@/features/landing/components/HeroSection.vue'
import ServicesSection from '@/features/landing/components/ServicesSection.vue'
import TestimonialsSection from '@/features/landing/components/TestimonialsSection.vue'
import CtaSection from '@/features/landing/components/CTASection.vue'

import PricingSection from '@/features/pricing/components/PricingSection.vue'

import FaqSection from '@/features/faq/components/FaqSection.vue'
</script>
<template>
  <section class="section-spacing">
    <Container>
      <SectionTitle
        badge="Appointment"
        title="Book Your Session"
        description="Choose your service and preferred appointment time."
      />

      <div class="grid gap-8 lg:grid-cols-[1fr_380px]">
        <!-- left -->

        <div class="space-y-8">
          <!-- services -->

          <BaseCard class="p-8">
            <h2 class="mb-6 text-3xl font-black">
              Select Service
            </h2>

            <ServiceSelector
              @select="selectedService = $event"
            />
          </BaseCard>

          <!-- times -->

          <BaseCard class="p-8">
            <h2 class="mb-6 text-3xl font-black">
              Select Time
            </h2>

            <TimeSlotSelector
              @select="selectedTime = $event"
            />
          </BaseCard>

          <!-- form -->

          <BaseCard class="p-8">
            <h2 class="mb-6 text-3xl font-black">
              Your Information
            </h2>

            <div class="grid gap-4">
              <BaseInput placeholder="Full Name" />

              <BaseInput placeholder="Email Address" />

              <BaseInput placeholder="Phone Number" />

              <BaseButton>
                Confirm Booking
              </BaseButton>
            </div>
          </BaseCard>
        </div>

        <!-- right -->

        <div>
          <BookingSummary
            :service="selectedService"
            :time="selectedTime"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

import ServiceSelector from '@/features/booking/components/ServiceSelector.vue'
import TimeSlotSelector from '@/features/booking/components/TimeSlotSelector.vue'
import BookingSummary from '@/features/booking/components/BookingSummary.vue'

const selectedService = ref(null)
const selectedTime = ref('')
</script>
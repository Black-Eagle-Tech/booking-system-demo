<template>
  <section class="section-spacing">
    <Container>
      <SectionTitle
        badge="Appointment"
        title="Book Your Session"
        description="Choose your service, date and preferred appointment time."
      />

      <div class="grid gap-8 xl:grid-cols-[1fr_380px]">
        <!-- left -->

        <div class="space-y-8">
          <!-- services -->

          <BaseCard class="p-6 md:p-8">
            <div class="mb-8 flex items-center justify-between">
              <div>
                <h2 class="text-3xl font-black">
                  Select Service
                </h2>

                <p class="mt-2 text-slate-400">
                  Choose the type of appointment you need.
                </p>
              </div>

              <div
                class="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-300"
              >
                Step 1
              </div>
            </div>

            <ServiceSelector
              @select="selectedService = $event"
            />
          </BaseCard>

          <!-- dates -->

          <BaseCard class="p-6 md:p-8">
            <div class="mb-8 flex items-center justify-between">
              <div>
                <h2 class="text-3xl font-black">
                  Select Date
                </h2>

                <p class="mt-2 text-slate-400">
                  Pick your preferred appointment day.
                </p>
              </div>

              <div
                class="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-300"
              >
                Step 2
              </div>
            </div>

            <DateSelector
              @select="selectedDate = $event"
            />
          </BaseCard>

          <!-- times -->

          <BaseCard class="p-6 md:p-8">
            <div class="mb-8 flex items-center justify-between">
              <div>
                <h2 class="text-3xl font-black">
                  Select Time
                </h2>

                <p class="mt-2 text-slate-400">
                  Available appointment time slots.
                </p>
              </div>

              <div
                class="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-300"
              >
                Step 3
              </div>
            </div>

            <TimeSlotSelector
              @select="selectedTime = $event"
            />
          </BaseCard>

          <!-- form -->

          <BaseCard class="p-6 md:p-8">
            <div class="mb-8 flex items-center justify-between">
              <div>
                <h2 class="text-3xl font-black">
                  Your Information
                </h2>

                <p class="mt-2 text-slate-400">
                  Complete your appointment details.
                </p>
              </div>

              <div
                class="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-300"
              >
                Final Step
              </div>
            </div>

            <div class="grid gap-4">
              <BaseInput
                v-model="form.name"
                placeholder="Full Name"
              />

              <BaseInput
                v-model="form.email"
                placeholder="Email Address"
              />

              <BaseInput
                v-model="form.phone"
                placeholder="Phone Number"
              />

              <BaseButton
                @click="confirmBooking"
              >
                Confirm Booking
              </BaseButton>
            </div>
          </BaseCard>
        </div>

        <!-- right -->

        <div>
          <BookingSummary
            :service="selectedService"
            :date="selectedDate"
            :time="selectedTime"
          />
        </div>
      </div>
    </Container>

    <!-- success modal -->

    <SuccessModal
      :open="showSuccess"
      @close="closeModal"
    />

    <!-- toast -->

    <ToastNotification
      :show="showToast"
      @close="showToast = false"
    />
  </section>
</template>

<script setup>
import {
  reactive,
  ref,
} from 'vue'

import Container from '@/components/ui/Container.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

import ServiceSelector from '@/features/booking/components/ServiceSelector.vue'
import TimeSlotSelector from '@/features/booking/components/TimeSlotSelector.vue'
import BookingSummary from '@/features/booking/components/BookingSummary.vue'

import DateSelector from '@/features/calendar/components/DateSelector.vue'

import SuccessModal from '@/features/modals/components/SuccessModal.vue'

import ToastNotification from '@/features/notifications/components/ToastNotification.vue'

const selectedService = ref(null)
const selectedDate = ref(null)
const selectedTime = ref('')

const showSuccess = ref(false)
const showToast = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
})

const confirmBooking = () => {
  showSuccess.value = true
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 4000)
}

const closeModal = () => {
  showSuccess.value = false
}
</script>
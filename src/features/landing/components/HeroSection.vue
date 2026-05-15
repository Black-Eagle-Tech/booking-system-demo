<template>
  <section class="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
    <!-- background orbs -->

    <div
      class="pulse-glow absolute top-24 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
    />

    <div
      class="pulse-glow absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
    />

    <Container>
      <div
        class="grid items-center gap-20 lg:grid-cols-2"
      >
        <!-- content -->

        <div
          v-reveal
          class="relative z-10"
        >
          <!-- badge -->

          <div
            class="mb-8 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300"
          >
            Next Generation Booking Platform
          </div>

          <!-- title -->

          <h1
            class="mb-8 text-5xl font-black leading-none tracking-tight md:text-7xl"
          >
            Smart Booking

            <span
              class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            >
              For Modern
            </span>

            Businesses
          </h1>

          <!-- description -->

          <p
            class="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
          >
            Automate appointments, manage schedules and deliver premium client experiences with a modern booking platform.
          </p>

          <!-- actions -->

          <div class="flex flex-col gap-4 sm:flex-row">
            <BaseButton class="pulse-glow">
              Start Booking
            </BaseButton>

            <BaseButton variant="secondary">
              Live Preview
            </BaseButton>
          </div>
        </div>

        <!-- visual -->

        <div
          v-reveal
          class="relative"
        >
          <!-- floating badge -->

          <div
            class="floating glass-card absolute -top-6 -left-6 z-20 rounded-2xl px-5 py-4 backdrop-blur-xl"
          >
            <p class="text-sm text-slate-400">
              Weekly Growth
            </p>

            <p class="text-2xl font-black text-blue-400">
              +24%
            </p>
          </div>

          <!-- dashboard preview -->

          <div
            class="glass-card glow-border floating relative overflow-hidden rounded-[2rem] p-8"
          >
            <!-- top -->

            <div class="mb-8 flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-black">
                  Appointments
                </h3>

                <p class="text-slate-400">
                  Weekly Overview
                </p>
              </div>

              <div
                class="rounded-2xl bg-green-500/10 px-4 py-2 text-sm text-green-400"
              >
                +18%
              </div>
            </div>

            <!-- fake chart -->

            <div class="mb-10 flex h-64 items-end gap-4">
              <div
                v-for="(value, index) in chartData"
                :key="index"
                class="flex flex-1 flex-col items-center gap-3"
              >
                <div
                  class="w-full rounded-t-3xl bg-gradient-to-t from-blue-500 to-cyan-400"
                  :style="{
                    height: `${value}%`,
                  }"
                />

                <span class="text-sm text-slate-500">
                  {{ labels[index] }}
                </span>
              </div>
            </div>

            <!-- bottom stats -->

            <div class="grid gap-4 md:grid-cols-2">
              <div
                class="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p class="mb-2 text-sm text-slate-400">
                  Today's Appointments
                </p>

                <h4 class="text-4xl font-black">
                  24
                </h4>
              </div>

              <div
                class="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p class="mb-2 text-sm text-slate-400">
                  Revenue
                </p>

                <h4 class="text-4xl font-black text-blue-400">
                  $4.2K
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const chartData = [35, 70, 55, 90, 60, 80, 65]

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>
<template>
  <section class="py-24 px-6 text-center">
    <div class="max-w-4xl mx-auto">
      <div class="inline-block px-4 py-2 rounded-full glass mb-6">
        Modern Appointment System
      </div>

      <h1 class="text-6xl font-black leading-tight mb-6">
        Smart Booking For Modern Businesses
      </h1>

      <p class="text-slate-300 text-xl mb-10">
        Automate appointments, manage schedules and deliver a premium client experience.
      </p>

      <div class="flex justify-center gap-4">
        <router-link
          to="/booking"
          class="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 transition"
        >
          Start Booking
        </router-link>

        <router-link
          to="/dashboard"
          class="px-6 py-3 rounded-xl glass"
        >
          View Dashboard
        </router-link>
      </div>
    </div>
  </section>
</template>

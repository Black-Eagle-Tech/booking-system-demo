<template>
  <section class="section-spacing">
    <Container>
      <div class="grid gap-8 xl:grid-cols-[280px_1fr]">
        <!-- sidebar -->

        <DashboardSidebar />

        <!-- content -->

        <div class="space-y-8">
          <SectionTitle
            badge="Dashboard"
            title="Business Overview"
            description="Monitor appointments, revenue and client activity."
          />

          <StatsCards />

          <div class="grid gap-8 2xl:grid-cols-[1fr_420px]">
            <AnalyticsChart />

            <UpcomingAppointments />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

import DashboardSidebar from '@/features/dashboard/components/DashboardSidebar.vue'
import StatsCards from '@/features/dashboard/components/StatsCards.vue'
import AnalyticsChart from '@/features/dashboard/components/AnalyticsChart.vue'
import UpcomingAppointments from '@/features/dashboard/components/UpcomingAppointments.vue'
</script>
<template>
  <header class="sticky top-0 z-50 px-6 py-6 backdrop-blur-xl">
    <Container>
      <nav
        class="glass-card glow-border flex items-center justify-between px-4 py-3 md:px-6 md:py-4"
      >
        <!-- logo -->

        <router-link
          to="/"
          class="flex items-center gap-3"
        >
          <div
            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-500 font-black md:h-10 md:w-10"
          >
            N
          </div>

          <div>
            <h1 class="text-base font-black md:text-lg">
              NovaCare
            </h1>

            <p class="text-xs text-slate-400">
              Booking System
            </p>
          </div>
        </router-link>

        <!-- desktop nav -->

        <div class="hidden items-center gap-3 md:flex">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-2xl px-4 py-2 transition-all duration-300"
            :class="
              route.path === item.to
                ? 'bg-blue-500/20 text-blue-300'
                : 'text-slate-300 hover:bg-white/5 hover:text-white'
            "
          >
            {{ item.label }}
          </router-link>
        </div>

        <!-- actions -->

        <div class="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <BaseButton>
            Get Started
          </BaseButton>
        </div>

        <!-- mobile button -->

        <button
          class="md:hidden"
          @click="isOpen = !isOpen"
        >
          <Menu class="h-6 w-6" />
        </button>
      </nav>

      <!-- mobile menu -->

      <transition name="fade">
        <div
          v-if="isOpen"
          class="glass-card glow-border mt-4 flex flex-col gap-3 rounded-3xl p-6 md:hidden"
        >
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-2xl px-4 py-3 transition"
            :class="
              route.path === item.to
                ? 'bg-blue-500/20 text-blue-300'
                : 'hover:bg-white/5'
            "
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>

          <BaseButton>
            Get Started
          </BaseButton>
        </div>
      </transition>
    </Container>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu } from 'lucide-vue-next'

import Container from '@/components/ui/Container.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const route = useRoute()

const isOpen = ref(false)

const navItems = [
  {
    label: 'Home',
    to: '/',
  },

  {
    label: 'Booking',
    to: '/booking',
  },

  {
    label: 'Dashboard',
    to: '/dashboard',
  },
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
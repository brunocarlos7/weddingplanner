<script setup>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import HeroSection from '../components/dashboard/HeroSection.vue'
import ActionButtons from '../components/dashboard/ActionButtons.vue'
import GuestStats from '../components/dashboard/GuestStats.vue'
import BudgetStats from '../components/dashboard/BudgetStats.vue'
import VendorList from '../components/dashboard/VendorList.vue'
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark text-text-main dark:text-[#e8e6e3] min-h-screen">
    <TheHeader />
    <main class="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      <HeroSection />
      <ActionButtons />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GuestStats />
        <BudgetStats />
      </div>
      <VendorList />
    </main>
    <TheFooter />
  </div>
</template>

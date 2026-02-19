<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  actionText: {
    type: String,
    default: ''
  },
  actionLink: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100/50 h-full flex flex-col">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold text-gray-800 tracking-tight">{{ title }}</h3>
      <a 
        v-if="actionText" 
        :href="actionLink" 
        class="text-sm font-semibold text-[#8BA888] hover:text-[#5F7A5D] transition-colors"
      >
        {{ actionText }}
      </a>
      <slot name="header-action" v-else></slot>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>

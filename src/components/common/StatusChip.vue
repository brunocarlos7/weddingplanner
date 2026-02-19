<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String, // 'sage', 'lavender', 'orange', 'purple', 'green', 'yellow' etc.
    default: 'gray'
  }
})

const colorClasses = computed(() => {
  const map = {
    sage: 'bg-[#E3EBE1] text-[#5F7A5D]',
    lavender: 'bg-[#F2ECF7] text-[#755C8F]',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-500',
    gray: 'bg-gray-100 text-gray-600'
  }
  return map[props.color] || map.gray
})
</script>

<template>
  <span 
    class="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide transition-colors"
    :class="colorClasses"
  >
    {{ text }}
  </span>
</template>

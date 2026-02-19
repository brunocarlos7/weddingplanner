<script setup>
import DashboardCard from '../common/DashboardCard.vue'
import StatusChip from '../common/StatusChip.vue'

const events = [
  {
    id: 1,
    day: '15',
    month: 'JUN',
    title: 'Degustação do Buffet',
    time: '14:00',
    location: 'Quinta da Boa Vista',
    tags: [
      { text: 'Fornecedor', color: 'gray' },
      { text: 'Pendente', color: 'red' } // Using red/orange for pending
    ]
  },
  {
    id: 2,
    day: '22',
    month: 'JUN',
    title: 'Prova do Vestido',
    time: '10:30',
    location: 'Atelier Blanc',
    participants: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyxQKan38sG1qJMzG892NzXEHvPdqkXUOGxcgurBKkDtb0FV5kGjORey793ucWDNySdWOxk5W0vkAzqjvbAXJppZyfpU5cYXqaWpEfkwwJT_WqQ1DTfbFl0biIyLeQ8mhBGQsH2c2clRuhcG1TzgbMsYGTTXpCVaSvuB9jFKInPnHPaCy-CX-Q9u4PHyVyIYDi-qg9AasKul8yNALIfVE9wkPXSVKhwlkigIZ7iTmD6JG62uxApvsVz9LJWRbEH6ajgIoRIfrelJcB',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU_VNjAm6KWsfP4miE0mJPoteeISbwcGMxmF3b1TKblHtmGW5jVxmHWesg-nXI2cjAYr5Jk9NoX3wIlmhFr0DijZa9b7mxW3Qbe8UMpcAfhPY5mCrHceiovF6C8EI1_tYvasIdnvt98F0EiT3VtBkugiSEq4xv1gefQ1HtxCJ9vylVASHGFaa9Tnv8bDId8GgxxjPomujF-N0bdoS6mjX7nkV1KDsIyanmufYE6evgwW8e-qOqpajoJi343MV8YqbE4DLD9AkVWVy'
    ]
  }
]
</script>

<template>
  <DashboardCard title="Próximos Eventos" actionText="Ver Calendário" actionLink="#">
    <div class="space-y-6">
      <div v-for="event in events" :key="event.id" class="flex gap-4 group">
        <!-- Date Badge - Circular/Soft Rounded for separation -->
        <div class="flex flex-col items-center justify-center p-2 rounded-2xl bg-lavender-light/50 border border-lavender-medium/30 min-w-[3.5rem] h-[3.5rem] text-center shadow-sm group-hover:bg-lavender-light transition-colors">
          <span class="text-[10px] font-bold text-lavender-dark uppercase tracking-wider">{{ event.month }}</span>
          <span class="text-xl font-black text-text-main leading-none">{{ event.day }}</span>
        </div>

        <!-- Event Details -->
        <div class="flex-1">
          <h4 class="font-bold text-text-main text-lg leading-tight">{{ event.title }}</h4>
          <div class="flex items-center gap-1.5 text-sm text-text-muted mt-1 font-medium">
            <span>{{ event.time }}</span>
            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>{{ event.location }}</span>
          </div>
          
          <!-- Tags -->
          <div v-if="event.tags" class="flex items-center gap-2 mt-2.5">
            <StatusChip 
              v-for="(tag, index) in event.tags" 
              :key="index"
              :text="tag.text"
              :color="tag.color"
            />
          </div>

          <!-- Participants -->
          <div v-if="event.participants" class="flex -space-x-2 mt-2.5">
            <img 
              v-for="(avatar, index) in event.participants" 
              :key="index" 
              :src="avatar" 
              alt="Participant" 
              class="w-6 h-6 rounded-full border-2 border-white object-cover ring-1 ring-gray-100"
            >
          </div>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

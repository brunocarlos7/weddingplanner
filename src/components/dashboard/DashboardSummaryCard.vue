<script setup>
import { ref } from 'vue'
import StatusChip from '../common/StatusChip.vue'

const activeTab = ref('events') // 'events' | 'priorities'

// --- Events Data ---
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
      { text: 'Pendente', color: 'red' }
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
  },
  {
    id: 3,
    day: '10',
    month: 'JUL',
    title: 'Reunião com Decorador',
    time: '16:00',
    location: 'Flores & Co.',
    tags: [
      { text: 'Decoração', color: 'yellow' }
    ]
  },
  {
    id: 4,
    day: '28',
    month: 'AGO',
    title: 'Envio dos Convites',
    time: '09:00',
    location: 'Correios',
    tags: [
      { text: 'Urgente', color: 'red' }
    ]
  }
]

// --- Priorities Data ---
const priorities = ref([
  {
    id: 1,
    title: 'Finalizar lista de músicas',
    subtitle: 'Enviar para o DJ até sexta-feira',
    completed: false,
    tag: 'Música',
    tagColor: 'purple'
  },
  {
    id: 2,
    title: 'Pagar sinal do fotógrafo',
    subtitle: 'Pago via PIX',
    completed: true,
    tag: 'Concluído',
    tagColor: 'green'
  },
  {
    id: 3,
    title: 'Escolher lembrancinhas',
    subtitle: 'Pesquisar fornecedores de velas aromáticas',
    completed: false,
    tag: 'Decoração',
    tagColor: 'yellow'
  },
  {
    id: 4,
    title: 'Confirmar degustação',
    subtitle: 'Enviar e-mail para o buffet',
    completed: false,
    tag: 'Buffet',
    tagColor: 'red'
  },
  {
    id: 5,
    title: 'Reunião Pastor',
    subtitle: 'Alinhar detalhes da cerimônia',
    completed: false,
    tag: 'Cerimônia',
    tagColor: 'gray'
  }
])
</script>

<template>
  <div class="bg-white rounded-[2rem] shadow-sm border border-gray-100/50 overflow-hidden flex flex-col h-full min-h-[400px]">
    
    <!-- Tabs Header -->
    <div class="flex items-center border-b border-gray-100/80 px-8 gap-8">
      <button 
        @click="activeTab = 'events'"
        class="py-4 text-sm font-semibold relative transition-all duration-300 hover:bg-gray-50/50 px-2"
        :class="activeTab === 'events' ? 'text-sage-dark' : 'text-text-muted hover:text-text-main'"
      >
        Próximos Eventos
        <div 
          class="absolute bottom-0 left-0 right-0 h-[3px] bg-sage-green rounded-t-full transition-all duration-300"
          :class="activeTab === 'events' ? 'opacity-100' : 'opacity-0'"
        ></div>
      </button>
      
      <button 
        @click="activeTab = 'priorities'"
        class="py-4 text-sm font-semibold relative transition-all duration-300 hover:bg-gray-50/50 px-2"
        :class="activeTab === 'priorities' ? 'text-sage-dark' : 'text-text-muted hover:text-text-main'"
      >
        Prioridades da Semana
        <div 
          class="absolute bottom-0 left-0 right-0 h-[3px] bg-sage-green rounded-t-full transition-all duration-300"
          :class="activeTab === 'priorities' ? 'opacity-100' : 'opacity-0'"
        ></div>
        <span v-if="priorities.filter(p => !p.completed).length > 0 && activeTab !== 'priorities'" class="absolute top-3 -right-2 w-2 h-2 rounded-full bg-sage-green"></span>
      </button>

      <a href="#" class="ml-auto flex items-center gap-2 bg-lavender-light/40 hover:bg-lavender-light text-lavender-dark font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 group">
        Eventos & Prioridades <span class="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform duration-300">calendar_add_on</span>
      </a>
    </div>

    <!-- Content Area -->
    <div class="flex-1 p-6 relative bg-white">
      <!-- Events Tab -->
      <div v-if="activeTab === 'events'" class="space-y-4 animate-fade-in">
        <!-- Grid Layout for Events -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="event in events" :key="event.id" class="flex gap-4 group p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer bg-gray-50/30">
            <!-- Date Badge -->
            <div class="flex flex-col items-center justify-center p-2 rounded-2xl bg-lavender-light/50 border border-lavender-medium/30 min-w-[3.5rem] h-[3.5rem] text-center shadow-sm group-hover:bg-lavender-light group-hover:scale-105 transition-all duration-300">
              <span class="text-[10px] font-bold text-lavender-dark uppercase tracking-wider">{{ event.month }}</span>
              <span class="text-xl font-black text-text-main leading-none">{{ event.day }}</span>
            </div>

            <!-- Event Details -->
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-text-main text-lg leading-tight truncate group-hover:text-sage-dark transition-colors">{{ event.title }}</h4>
              <div class="flex items-center gap-1.5 text-sm text-text-muted mt-1 font-medium">
                <span>{{ event.time }}</span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span class="truncate">{{ event.location }}</span>
              </div>
              
              <div v-if="event.tags" class="flex items-center gap-2 mt-3">
                <StatusChip v-for="(tag, index) in event.tags" :key="index" :text="tag.text" :color="tag.color" />
              </div>

              <div v-if="event.participants" class="flex -space-x-2 mt-3">
                <img v-for="(avatar, index) in event.participants" :key="index" :src="avatar" alt="Participant" class="w-6 h-6 rounded-full border-2 border-white object-cover ring-1 ring-gray-100">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Priorities Tab -->
      <div v-else class="space-y-2 animate-fade-in">
        <div class="flex items-center justify-end mb-4">
          <span class="text-xs font-medium text-text-muted bg-gray-100 px-3 py-1 rounded-full">
            {{ priorities.filter(p => !p.completed).length }} restantes
          </span>
        </div>

        <!-- Grid Layout for Priorities -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="task in priorities" :key="task.id" class="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer bg-gray-50/30 group" @click="task.completed = !task.completed">
            <!-- Checkbox -->
            <div class="relative flex items-center mt-1">
              <div class="w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300" :class="task.completed ? 'bg-sage-green border-sage-green' : 'border-gray-300 group-hover:border-sage-green/60'">
                <span v-if="task.completed" class="material-symbols-outlined text-[16px] text-white">check</span>
              </div>
            </div>

            <!-- Task Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <h4 class="font-semibold text-text-main transition-all text-base leading-tight group-hover:text-sage-dark" :class="{'line-through text-text-muted opacity-70': task.completed}">
                  {{ task.title }}
                </h4>
                <StatusChip :text="task.tag" :color="task.tagColor" />
              </div>
              <p class="text-sm text-text-muted mt-1 font-medium" :class="{'opacity-50': task.completed}">
                {{ task.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

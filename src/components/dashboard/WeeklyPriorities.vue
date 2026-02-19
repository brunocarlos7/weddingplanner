<script setup>
import { ref } from 'vue'
import DashboardCard from '../common/DashboardCard.vue'
import StatusChip from '../common/StatusChip.vue'

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
  }
])
</script>

<template>
  <DashboardCard title="Prioridades da Semana">
    <template #header-action>
      <span class="text-sm font-medium text-text-muted bg-gray-50 px-3 py-1 rounded-full">3 restantes</span>
    </template>

    <div class="space-y-2">
      <div v-for="task in priorities" :key="task.id" class="flex items-start gap-4 p-3 rounded-2xl hover:bg-background-light/50 transition-colors group cursor-pointer" @click="task.completed = !task.completed">
        <!-- Checkbox - Circular for MD3 feel -->
        <div class="relative flex items-center mt-1">
          <div 
            class="w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300"
            :class="task.completed ? 'bg-sage-green border-sage-green' : 'border-gray-300 group-hover:border-sage-green/60'"
          >
            <span v-if="task.completed" class="material-symbols-outlined text-[16px] text-white">check</span>
          </div>
        </div>

        <!-- Task Content -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <h4 
              class="font-semibold text-text-main transition-all text-base"
              :class="{'line-through text-text-muted opacity-70': task.completed}"
            >
              {{ task.title }}
            </h4>
            <StatusChip :text="task.tag" :color="task.tagColor" />
          </div>
          <p 
            class="text-sm text-text-muted mt-0.5 font-medium"
            :class="{'opacity-50': task.completed}"
          >
            {{ task.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

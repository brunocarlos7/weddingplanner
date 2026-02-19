<script setup>
import { ref } from 'vue'
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'

const viewMode = ref('grid') // 'grid' or 'list'

const guests = [
  {
    initials: 'AS',
    name: 'Alice Silva',
    group: 'Família da Noiva',
    groupClass: 'bg-lavender-light text-lavender-dark',
    status: 'Confirmado',
    statusClass: 'bg-sage-medium text-sage-dark/90',
    diet: 'Sem Glúten',
    dietClass: 'bg-orange-50 text-orange-700 border-orange-100',
    table: '05',
    companions: '+1 Convidado',
    iconColor: 'bg-lavender-medium/40 text-lavender-dark'
  },
  {
    initials: 'BP',
    name: 'Bruno Pereira',
    group: 'Amigos do Noivo',
    groupClass: 'bg-gray-100 text-gray-700',
    status: 'Pendente',
    statusClass: 'bg-lavender-light text-lavender-dark border border-lavender-medium',
    diet: 'Nenhuma',
    dietClass: 'text-gray-400 italic',
    table: '-',
    companions: '-',
    iconColor: 'bg-lavender-medium/40 text-lavender-dark'
  },
  {
    initials: 'CM',
    name: 'Carla Mendes',
    group: 'Família da Noiva',
    groupClass: 'bg-lavender-light text-lavender-dark',
    status: 'Confirmado',
    statusClass: 'bg-sage-medium text-sage-dark/90',
    diet: 'Vegetariano',
    dietClass: 'bg-green-50 text-green-700 border-green-100',
    table: '02',
    companions: '+2 Filhos',
    iconColor: 'bg-orange-100 text-orange-600'
  },
  {
    initials: 'DR',
    name: 'Daniel Rocha',
    group: 'Colegas',
    groupClass: 'bg-gray-100 text-gray-500',
    status: 'Recusado',
    statusClass: 'bg-clay-muted/40 text-clay-dark border border-clay-muted/60',
    diet: '-',
    dietClass: 'text-gray-400',
    table: '-',
    companions: '-',
    iconColor: 'bg-gray-100 text-gray-500 grayscale opacity-70',
    opacity: 'opacity-60'
  },
  {
    initials: 'EL',
    name: 'Eduarda Lima',
    group: 'Amigos da Noiva',
    groupClass: 'bg-gray-100 text-gray-700',
    status: 'Confirmado',
    statusClass: 'bg-sage-medium text-sage-dark/90',
    diet: 'Nenhuma',
    dietClass: 'text-gray-400 italic',
    table: '08',
    companions: 'Apenas Ela',
    iconColor: 'bg-lavender-medium/40 text-lavender-dark'
  }
]
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark text-text-main dark:text-[#e2e3dd] min-h-screen">
    <TheHeader />
    
    <main class="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <router-link to="/dashboard" class="flex items-center gap-1 text-sm text-sage-dark hover:opacity-70 transition-opacity">
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
              Voltar ao Dashboard
            </router-link>
          </div>
          <h2 class="text-3xl font-bold text-text-main">Lista de Convidados</h2>
          <p class="text-sm text-on-surface-variant mt-1">Gerencie RSVPs, mesas e preferências alimentares.</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="material-symbols-outlined text-sage-dark">search</span>
            </div>
            <input class="block w-full sm:w-64 pl-10 pr-3 py-3 border-none rounded-xl bg-white border-2 border-transparent focus:border-sage-green focus:ring-0 shadow-sm text-sm placeholder-gray-400" placeholder="Buscar convidado..." type="text"/>
          </div>
          
          <!-- View Toggle -->
          <div class="flex bg-white rounded-xl border border-sage-medium/30 p-1 shadow-sm">
            <button 
              @click="viewMode = 'grid'"
              :class="{'bg-sage-light text-sage-dark': viewMode === 'grid', 'text-text-muted hover:bg-gray-50': viewMode !== 'grid'}"
              class="p-2 rounded-lg transition-colors"
              title="Visualização em Grade">
              <span class="material-symbols-outlined text-[20px]">grid_view</span>
            </button>
            <button 
              @click="viewMode = 'list'"
              :class="{'bg-sage-light text-sage-dark': viewMode === 'list', 'text-text-muted hover:bg-gray-50': viewMode !== 'list'}"
              class="p-2 rounded-lg transition-colors"
              title="Visualização em Lista">
              <span class="material-symbols-outlined text-[20px]">view_list</span>
            </button>
          </div>

          <button class="flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-sage-light border border-sage-medium/30 rounded-xl transition-colors text-sm font-medium text-text-main shadow-sm">
            <span class="material-symbols-outlined text-sage-dark text-[20px]">filter_list</span>
            Filtros
          </button>
          <button class="flex items-center justify-center gap-2 px-6 py-3 bg-sage-green hover:bg-sage-dark text-white rounded-xl shadow-md hover:shadow-lg hover:shadow-sage-green/20 transition-all text-sm font-bold">
            <span class="material-symbols-outlined text-[20px]">add</span>
            Adicionar
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white p-6 rounded-xl border border-sage-light shadow-sm flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-on-surface-variant mb-1">Total Convidados</p>
            <p class="text-3xl font-bold text-text-main">150</p>
          </div>
          <div class="p-3 bg-gray-50 rounded-full text-gray-400">
            <span class="material-symbols-outlined">group</span>
          </div>
        </div>
        <div class="bg-sage-light p-6 rounded-xl border border-sage-medium/40 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div>
            <p class="text-sm font-medium text-sage-dark mb-1">Confirmados</p>
            <p class="text-3xl font-bold text-sage-dark">85</p>
          </div>
          <div class="p-3 bg-white/60 rounded-full text-sage-dark">
            <span class="material-symbols-outlined">check_circle</span>
          </div>
        </div>
        <div class="bg-lavender-light p-6 rounded-xl border border-lavender-medium/40 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div>
            <p class="text-sm font-medium text-lavender-dark mb-1">Pendentes</p>
            <p class="text-3xl font-bold text-lavender-dark">45</p>
          </div>
          <div class="p-3 bg-white/60 rounded-full text-lavender-dark">
            <span class="material-symbols-outlined">mark_email_unread</span>
          </div>
        </div>
        <div class="bg-clay-muted/20 p-6 rounded-xl border border-clay-muted/40 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div>
            <p class="text-sm font-medium text-clay-dark mb-1">Recusados</p>
            <p class="text-3xl font-bold text-clay-dark">20</p>
          </div>
          <div class="p-3 bg-white/60 rounded-full text-clay-dark">
            <span class="material-symbols-outlined">cancel</span>
          </div>
        </div>
      </div>

      <!-- Grid View -->
      <div v-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="guest in guests" :key="guest.initials" :class="[guest.opacity || '']" class="bg-surface-light hover:bg-white transition-all duration-200 rounded-xl border border-sage-light hover:border-sage-medium hover:shadow-md p-5 flex flex-col justify-between group">
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <div :class="guest.iconColor" class="size-14 rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm">
                {{ guest.initials }}
              </div>
              <div>
                <h3 class="font-bold text-text-main text-lg leading-tight" :class="{'line-through opacity-70': guest.status === 'Recusado'}">{{ guest.name }}</h3>
                <span :class="guest.groupClass" class="text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-1">{{ guest.group }}</span>
              </div>
            </div>
            <button class="text-on-surface-variant/50 hover:text-sage-dark p-1 rounded-full hover:bg-sage-light/50 transition-colors">
              <span class="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
          
          <div class="space-y-3 mb-5" :class="{'opacity-70': guest.status === 'Recusado'}">
            <div class="flex items-center justify-between text-sm">
              <span class="text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-sage-dark/70">restaurant</span> Dieta
              </span>
              <span :class="guest.dietClass.includes('text-gray') ? guest.dietClass : (guest.dietClass + ' flex items-center gap-1 px-2 py-1 rounded border font-medium text-xs')">
                 {{ guest.diet }}
              </span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-sage-dark/70">table_restaurant</span> Mesa
              </span>
              <span class="font-mono font-medium text-text-main">{{ guest.table }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-sage-dark/70">group_add</span> Acompanhantes
              </span>
              <span class="text-text-main text-xs">{{ guest.companions }}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-sage-light flex items-center justify-between mt-auto">
            <span :class="guest.statusClass" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              <span v-if="guest.status === 'Confirmado'" class="material-symbols-outlined text-[14px]">check_circle</span>
              <span v-else-if="guest.status === 'Pendente'" class="material-symbols-outlined text-[14px]">schedule</span>
              <span v-else class="material-symbols-outlined text-[14px]">cancel</span>
              {{ guest.status }}
            </span>
            <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button class="p-2 text-on-surface-variant hover:text-sage-dark hover:bg-sage-light rounded-full transition-colors" title="Editar">
                <span class="material-symbols-outlined text-[18px]">edit</span>
              </button>
              <button class="p-2 text-on-surface-variant hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" title="Excluir">
                <span class="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Add New Card -->
        <div class="bg-white/40 hover:bg-white transition-all duration-200 rounded-xl border-2 border-dashed border-sage-medium/50 hover:border-sage-green p-5 flex flex-col items-center justify-center text-center group cursor-pointer h-full min-h-[280px]">
          <div class="size-16 rounded-full bg-sage-light group-hover:bg-sage-medium flex items-center justify-center text-sage-dark transition-colors mb-4">
            <span class="material-symbols-outlined text-[32px]">add</span>
          </div>
          <h3 class="font-bold text-sage-dark text-lg group-hover:text-sage-green transition-colors">Adicionar Novo</h3>
          <p class="text-sm text-on-surface-variant/70 mt-1">Cadastre um novo convite</p>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="bg-surface-light dark:bg-[#1c2219] rounded-xl border border-sage-light shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-sage-light/60 border-b border-sage-medium/30">
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-sage-dark">Nome</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-sage-dark">Família / Grupo</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-sage-dark text-center">Status</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-sage-dark text-center">Mesa</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-sage-dark">Dieta Especial</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-sage-dark text-right">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-sage-light">
              <tr v-for="guest in guests" :key="'list-'+guest.initials" class="hover:bg-sage-light/30 transition-colors group">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div :class="guest.iconColor" class="size-10 rounded-full flex items-center justify-center font-bold text-sm">
                      {{ guest.initials }}
                    </div>
                    <div>
                      <p class="font-semibold text-text-main" :class="{'opacity-60': guest.status === 'Recusado'}">{{ guest.name }}</p>
                      <p v-if="guest.companions !== '-'" class="text-xs text-on-surface-variant">{{ guest.companions }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-text-main" :class="{'opacity-60': guest.status === 'Recusado'}">
                  <span :class="guest.groupClass" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-opacity-50">
                    {{ guest.group }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <span :class="guest.statusClass" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {{ guest.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center font-mono text-sm text-on-surface-variant">{{ guest.table }}</td>
                <td class="px-6 py-4 text-sm text-on-surface-variant">
                   <span :class="guest.dietClass.includes('text-gray') ? guest.dietClass : (guest.dietClass + ' flex items-center gap-1 px-2 py-1 rounded border font-medium w-fit text-xs')">
                     {{ guest.diet }}
                   </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button class="p-2 text-on-surface-variant hover:text-sage-dark hover:bg-sage-light/50 rounded-full transition-colors">
                      <span class="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button class="p-2 text-on-surface-variant hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                      <span class="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-sage-medium/30 flex items-center justify-between bg-white/50">
          <span class="text-sm text-on-surface-variant">Mostrando 5 de 150 convidados</span>
          <div class="flex gap-2">
            <button class="p-2 rounded-full hover:bg-sage-light text-on-surface-variant disabled:opacity-30">
              <span class="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button class="p-2 rounded-full hover:bg-sage-light text-on-surface-variant">
              <span class="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

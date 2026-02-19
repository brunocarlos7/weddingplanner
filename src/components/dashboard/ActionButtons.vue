<script setup>
</script>

<template>
  <div class="flex flex-wrap gap-4 items-center">
    <button class="flex items-center gap-2 bg-sage-green hover:bg-sage-dark text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all">
      <span class="material-symbols-outlined text-[20px]">add_circle</span>
      Adicionar Despesa
    </button>
    <router-link to="/guests" class="flex items-center gap-2 bg-clay-dark hover:bg-[#7a645a] text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all">
      <span class="material-symbols-outlined text-[20px]">person_add</span>
      Novo Convidado
    </router-link>
    <button class="flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all">
      <span class="material-symbols-outlined text-[20px]">calendar_add_on</span>
      Novo Evento
    </button>
  </div>
</template>

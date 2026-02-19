<script setup>
</script>

<template>
  <div class="flex flex-wrap gap-4 items-center">
    <button class="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all">
      <span class="material-symbols-outlined text-[20px]">add_circle</span>
      Adicionar Despesa
    </button>
    <router-link to="/guests" class="flex items-center gap-2 bg-secondary-light hover:bg-secondary/30 text-accent dark:text-secondary dark:bg-secondary/20 px-6 py-3 rounded-full font-bold border border-secondary/20 transition-colors">
      <span class="material-symbols-outlined text-[20px]">person_add</span>
      Novo Convidado
    </router-link>
  </div>
</template>

<script setup>
</script>

<template>
  <div class="bg-surface-light dark:bg-[#302e31] p-8 rounded-xl border border-primary/20 shadow-sm flex flex-col items-center">
    <div class="w-full flex justify-between items-center mb-6">
      <h3 class="text-lg font-bold text-text-main dark:text-primary">Lista de Convidados</h3>
      <span class="material-symbols-outlined text-secondary">groups</span>
    </div>
    <div class="relative size-48 flex items-center justify-center mb-6">
      <svg class="size-full transform -rotate-90">
        <circle class="text-surface-variant" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-width="12"></circle>
        <circle class="text-secondary rounded-full" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552.92" stroke-dashoffset="240" stroke-width="12"></circle>
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span class="text-4xl font-black text-text-main dark:text-white">85</span>
        <span class="text-xs uppercase tracking-tighter opacity-60 text-text-muted">RSVPs Recebidos</span>
      </div>
    </div>
    <div class="w-full grid grid-cols-2 gap-4 mt-auto">
      <div class="bg-background-light dark:bg-[#3d3a3d] p-4 rounded-xl text-center">
        <p class="text-2xl font-bold text-text-main dark:text-primary">150</p>
        <p class="text-xs opacity-60 text-text-muted">Total</p>
      </div>
      <div class="bg-secondary-light dark:bg-secondary/20 p-4 rounded-xl text-center">
        <p class="text-2xl font-bold text-accent dark:text-secondary">85</p>
        <p class="text-xs text-accent dark:text-secondary font-medium">Confirmados</p>
      </div>
    </div>
  </div>
</template>

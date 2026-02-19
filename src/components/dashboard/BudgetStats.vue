<script setup>
</script>

<template>
  <div class="lg:col-span-2 bg-surface-light dark:bg-[#302e31] p-8 rounded-xl border border-primary/20 shadow-sm">
    <div class="flex justify-between items-center mb-8">
      <div>
        <h3 class="text-lg font-bold text-text-main dark:text-primary">Gestão de Orçamento</h3>
        <p class="text-sm opacity-60 text-text-muted">Controle financeiro em tempo real</p>
      </div>
      <div class="text-right">
        <p class="text-2xl font-bold text-primary">$15,000</p>
        <p class="text-xs opacity-60 text-text-muted">de $30,000 investidos</p>
      </div>
    </div>
    <div class="space-y-6">
      <div class="space-y-2">
        <div class="flex justify-between text-sm font-medium">
          <span class="text-accent dark:text-secondary">Progresso do Gasto</span>
          <span class="text-text-main dark:text-white">50%</span>
        </div>
        <div class="h-4 bg-surface-variant rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-secondary-light to-primary rounded-full" style="width: 50%"></div>
        </div>
      </div>
      <div class="space-y-4 pt-4">
        <h4 class="text-sm font-bold uppercase tracking-widest opacity-60 text-text-muted">Despesas Recentes</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex items-center gap-3 p-4 bg-background-light dark:bg-[#3d3a3d] rounded-xl border border-transparent hover:border-primary/20 transition-colors">
            <span class="material-symbols-outlined text-primary">restaurant</span>
            <div>
              <p class="text-sm font-bold leading-none text-text-main dark:text-white">Catering</p>
              <p class="text-xs opacity-60 text-text-muted">$8,500</p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-4 bg-background-light dark:bg-[#3d3a3d] rounded-xl border border-transparent hover:border-primary/20 transition-colors">
            <span class="material-symbols-outlined text-primary">apartment</span>
            <div>
              <p class="text-sm font-bold leading-none text-text-main dark:text-white">Venue</p>
              <p class="text-xs opacity-60 text-text-muted">$5,000</p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-4 bg-background-light dark:bg-[#3d3a3d] rounded-xl border border-transparent hover:border-primary/20 transition-colors">
            <span class="material-symbols-outlined text-primary">apparel</span>
            <div>
              <p class="text-sm font-bold leading-none text-text-main dark:text-white">Dress</p>
              <p class="text-xs opacity-60 text-text-muted">$1,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<template>
  <section class="bg-surface-light dark:bg-[#302e31] rounded-xl border border-primary/20 shadow-sm overflow-hidden">
    <div class="p-6 md:p-8 border-b border-surface-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h3 class="text-lg font-bold text-text-main dark:text-primary">Fornecedores Parceiros</h3>
      <div class="flex gap-2">
        <button class="p-2 hover:bg-surface-variant rounded-full transition-colors text-text-muted dark:text-white">
          <span class="material-symbols-outlined">filter_list</span>
        </button>
        <button class="p-2 hover:bg-surface-variant rounded-full transition-colors text-text-muted dark:text-white">
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-background-light dark:bg-background-dark/30">
            <th class="px-8 py-4 text-sm font-semibold opacity-60 text-text-main dark:text-white">Fornecedor</th>
            <th class="px-8 py-4 text-sm font-semibold opacity-60 text-text-main dark:text-white">Categoria</th>
            <th class="px-8 py-4 text-sm font-semibold opacity-60 text-center text-text-main dark:text-white">Status</th>
            <th class="px-8 py-4 text-sm font-semibold opacity-60 text-right text-text-main dark:text-white">Pagamento</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-variant">
          <tr class="hover:bg-primary/5 transition-colors group">
            <td class="px-8 py-5 flex items-center gap-4">
              <div class="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark font-bold">A</div>
              <span class="font-medium text-text-main dark:text-white">Amore Photography</span>
            </td>
            <td class="px-8 py-5 text-sm opacity-80 text-text-muted">Fotografia</td>
            <td class="px-8 py-5 text-center">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-secondary-light text-accent border border-secondary/30">Pago Integral</span>
            </td>
            <td class="px-8 py-5 text-right font-mono font-medium text-text-main dark:text-white">$3,200</td>
          </tr>
          <tr class="hover:bg-primary/5 transition-colors group">
            <td class="px-8 py-5 flex items-center gap-4">
              <div class="size-10 rounded-full bg-secondary-light flex items-center justify-center text-accent font-bold">S</div>
              <span class="font-medium text-text-main dark:text-white">Serenity Catering Co.</span>
            </td>
            <td class="px-8 py-5 text-sm opacity-80 text-text-muted">Buffet</td>
            <td class="px-8 py-5 text-center">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary-dark border border-primary/20">Contrato Assinado</span>
            </td>
            <td class="px-8 py-5 text-right font-mono font-medium text-text-main dark:text-white">$8,500</td>
          </tr>
          <tr class="hover:bg-primary/5 transition-colors group">
            <td class="px-8 py-5 flex items-center gap-4">
              <div class="size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent dark:text-secondary font-bold">V</div>
              <span class="font-medium text-text-main dark:text-white">Villa Serenity</span>
            </td>
            <td class="px-8 py-5 text-sm opacity-80 text-text-muted">Espaço</td>
            <td class="px-8 py-5 text-center">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-secondary-light text-accent border border-secondary/30">Pago Integral</span>
            </td>
            <td class="px-8 py-5 text-right font-mono font-medium text-text-main dark:text-white">$5,000</td>
          </tr>
          <tr class="hover:bg-primary/5 transition-colors group">
            <td class="px-8 py-5 flex items-center gap-4">
              <div class="size-10 rounded-full bg-gray-500/20 flex items-center justify-center text-gray-500 font-bold">F</div>
              <span class="font-medium text-text-main dark:text-white">Flora &amp; Co</span>
            </td>
            <td class="px-8 py-5 text-sm opacity-80 text-text-muted">Decoração</td>
            <td class="px-8 py-5 text-center">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-600 border border-gray-300/50">Em Revisão</span>
            </td>
            <td class="px-8 py-5 text-right font-mono font-medium text-text-main dark:text-white">$2,100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

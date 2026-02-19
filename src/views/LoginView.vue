<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  // Mock login - just redirect to dashboard
  router.push('/dashboard')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-background-light dark:bg-background-dark">
    <!-- Background similar to HeroSection but blurred -->
    <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQU_VNjAm6KWsfP4miE0mJPoteeISbwcGMxmF3b1TKblHtmGW5jVxmHWesg-nXI2cjAYr5Jk9NoX3wIlmhFr0DijZa9b7mxW3Qbe8UMpcAfhPY5mCrHceiovF6C8EI1_tYvasIdnvt98F0EiT3VtBkugiSEq4xv1gefQ1HtxCJ9vylVASHGFaa9Tnv8bDId8GgxxjPomujF-N0bdoS6mjX7nkV1KDsIyanmufYE6evgwW8e-qOqpajoJi343MV8YqbE4DLD9AkVWVy'); filter: blur(8px);"></div>
    <div class="absolute inset-0 bg-black/40 z-0"></div>

    <div class="relative z-10 w-full max-w-md p-8 bg-surface-light/90 dark:bg-[#302e31]/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center p-3 bg-primary rounded-xl text-white shadow-sm mb-4">
          <span class="material-symbols-outlined text-3xl">favorite</span>
        </div>
        <h1 class="text-2xl font-bold text-text-main dark:text-primary">Bem-vindo de volta!</h1>
        <p class="text-sm text-text-muted mt-2">Organizador de Casamento Sarah &amp; James</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-text-main dark:text-[#e8e6e3] mb-1">Email</label>
          <input type="email" id="email" class="w-full px-4 py-3 rounded-xl border border-surface-variant bg-white dark:bg-[#3d3a3d] dark:border-transparent text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="seu@email.com" required>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-text-main dark:text-[#e8e6e3] mb-1">Senha</label>
          <input type="password" id="password" class="w-full px-4 py-3 rounded-xl border border-surface-variant bg-white dark:bg-[#3d3a3d] dark:border-transparent text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="••••••••" required>
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-text-muted cursor-pointer">
            <input type="checkbox" class="rounded text-primary focus:ring-primary">
            <span>Lembrar de mim</span>
          </label>
          <a href="#" class="text-accent hover:text-accent/80 font-medium">Esqueceu a senha?</a>
        </div>

        <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
          Entrar
        </button>
      </form>
      
      <p class="text-center text-sm text-text-muted mt-8">
        Ainda não tem conta? <a href="#" class="text-accent hover:text-accent/80 font-bold">Cadastre-se</a>
      </p>
    </div>
  </div>
</template>

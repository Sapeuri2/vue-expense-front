import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: 'https://github.com/Sapeuri2/vue-expense-front.git', // Assure-toi que ce chemin correspond à ton repository sur GitHub
  build: {
    minify: 'esbuild',
    target: 'esnext',
    sourcemap: false,
  },
})


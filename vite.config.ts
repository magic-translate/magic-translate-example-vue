import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves the app from /<repository name>/
  base: process.env.BASE_URL ?? '/',
  plugins: [vue(), tailwindcss()],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Automatically use repository base path on GitHub Pages and root '/' on Vercel/Local
  base: process.env.GITHUB_ACTIONS && !process.env.VERCEL ? '/Stanley-Johnson/' : '/',
  server: {
    port: 3000,
    open: false,
    host: true
  },
  preview: {
    port: 3000
  }
});

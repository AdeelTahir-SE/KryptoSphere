import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this matches the directory Vite is using
  },
  plugins: [react()],
  base: "/upworkpagesproject/",
  resolve: {
    alias: {
      '@': '/src', // Example alias
    },
  },
})

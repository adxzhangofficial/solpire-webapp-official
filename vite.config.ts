import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/solpire-webapp-official/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', '@react-three/fiber'],
          'vendor-ui': ['bootstrap', 'lucide-react', 'motion'],
          'vendor-router': ['@tanstack/react-router'],
          'vendor-form': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'vendor-utils': ['zustand', 'swiper', 'aos', 'sweetalert2'],
        },
      },
    },
    // Increase warning limit slightly to reduce noise
    chunkSizeWarningLimit: 600,
  },
})

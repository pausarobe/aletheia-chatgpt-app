import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    cssCodeSplit: false, // Ensure CSS is loaded in a single bundle
  },
});

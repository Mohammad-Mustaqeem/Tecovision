import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor';
          if (id.includes('node_modules/react-router-dom')) return 'router';
          if (id.includes('node_modules/lucide-react')) return 'icons';
        },
      },
    },
    chunkSizeWarningLimit: 800,
    sourcemap: false,
  },
});

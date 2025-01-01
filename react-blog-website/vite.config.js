import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure assets resolve correctly in production
  resolve: {
    alias: {
      '/public': '/src/assets', // Ensures paths resolve properly
    },
  },
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  server: {
    historyApiFallback: true, // Handles React Router paths during development
  },
});

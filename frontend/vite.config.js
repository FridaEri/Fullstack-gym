import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://74.241.242.179:3000', // Använd rätt backend-URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Tar bort "/api" från proxade URL:er
      },
    },
  },
});

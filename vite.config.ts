import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // `npm run analyze` writes an interactive bundle treemap to dist/stats.html
    mode === 'analyze' && visualizer({ filename: 'dist/stats.html', gzipSize: true, brotliSize: true }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        // Vendor code changes far less often than the app, so it gets its own long-lived cache entries.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
          if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) return 'motion';
          return 'vendor';
        },
      },
    },
  },
}));

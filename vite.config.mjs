import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Match the selected repository's GitHub Pages path; override for another host.
  base: process.env.VITE_BASE_PATH || '/portfolio_2026/',
  plugins: [react()],
  // No styled-components transform adds displayName; production uses runtime hashed IDs.
  build: { outDir: 'dist', sourcemap: false },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    environmentOptions: { jsdom: { pretendToBeVisual: true } },
  },
});

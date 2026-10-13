import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // Match the selected repository's GitHub Pages path; override for another host.
  base: process.env.VITE_BASE_PATH || '/portfolio_2026/',
  plugins: [react(), svgr()],
  build: { outDir: 'dist' },
  test: {
    environment: 'jsdom', globals: true,
    setupFiles: ['./src/setupTests.js'],
    environmentOptions: { jsdom: { pretendToBeVisual: true } },
  },
});

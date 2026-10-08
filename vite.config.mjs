import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/portfolio/',
  plugins: [react(), svgr()],
  build: { outDir: 'dist' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    environmentOptions: {
      jsdom: {
        pretendToBeVisual: true,
      },
    },
  },
});
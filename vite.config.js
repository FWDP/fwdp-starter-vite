import { defineConfig } from 'vite';

export default defineConfig({
  base: 'vanillawithbatteries/',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    include: ['**/*.test.js'],
  },
});

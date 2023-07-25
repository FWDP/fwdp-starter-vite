import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    include: ['**/*.test.js'],
  },
});

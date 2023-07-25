import { defineConfig } from 'vite';

// const dev = process.argv.includes('dev');
// const dev = process.env.NODE_ENV === ''
// const BASE = dev ? '/' : '/vanillawithbatteries';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vanillawithbatteries/' : '/',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    include: ['**/*.test.js'],
  },
});

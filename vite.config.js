import { defineConfig } from 'vite';

const BASE = '/fwdp-starter-vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? BASE : '/',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    include: ['**/*.test.js'],
  },
});

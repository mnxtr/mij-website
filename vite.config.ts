
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  // Base path for GitHub Pages - set to '/' for custom domain or '/repo-name/' for github.io
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-hook-form@7.55.0': 'react-hook-form',
      'figma:asset/d0b64312d47a4a667250b56920bfd5ebfc07b71b.png': path.resolve(__dirname, './src/assets/d0b64312d47a4a667250b56920bfd5ebfc07b71b.png'),
      'figma:asset/3d60b45b9f98358d9bf4a0cce020327d39812327.png': path.resolve(__dirname, './src/assets/3d60b45b9f98358d9bf4a0cce020327d39812327.png'),
      'figma:asset/2af45e4bf1e0936020bb934a75bdfdef991523cb.png': path.resolve(__dirname, './src/assets/2af45e4bf1e0936020bb934a75bdfdef991523cb.png'),
      'figma:asset/0fcc3f28daffd4c8a9dc7ec084222c8c4169541a.png': path.resolve(__dirname, './src/assets/0fcc3f28daffd4c8a9dc7ec084222c8c4169541a.png'),
      'figma:asset/0b6f008db8209dab55941ae5a8e36a79c90ac176.png': path.resolve(__dirname, './src/assets/0b6f008db8209dab55941ae5a8e36a79c90ac176.png'),
      'figma:asset/0621cc2c5bacc13d7baf5bc7b518107640d33480.png': path.resolve(__dirname, './src/assets/0621cc2c5bacc13d7baf5bc7b518107640d33480.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
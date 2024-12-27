import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/project-pokedex-react", // Nome do seu repositório no GitHub
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});

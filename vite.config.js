import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project-pokedex-react/',  // Substitua pelo nome do seu repositório
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});

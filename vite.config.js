import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importa o módulo path para facilitar a resolução de caminhos

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Configura as extensões que o Vite deve reconhecer
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});

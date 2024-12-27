import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], // Caminho dos testes
    exclude: ['**/node_modules/**', '**/dist/**'], // Exclui node_modules e dist
    watchExclude: ['**/node_modules/**', '**/dist/**'], // Também exclui esses ao assistir os arquivos
    setupFiles: ['./src/setupTests.js'], // Caminho para o arquivo de configuração de testes
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});

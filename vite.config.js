import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Components/', // Reemplaza <nombre-del-repositorio> con el nombre real de tu repositorio
  plugins: [react()]
});

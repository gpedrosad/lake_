import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Asegúrate de que la base está configurada para producción
  build: {
    outDir: 'dist', // Confirma que este es el directorio correcto
    // Otras configuraciones de build específicas de Vite pueden ir aquí
  }
});
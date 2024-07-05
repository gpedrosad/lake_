import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/lake_/', // Esto ajusta el base path para recursos, adecuado para subdirectorios en producción
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Configura cómo se nombran los archivos de activos en la salida
        assetFileNames: 'assets/[name]-[hash][extname]', // Agrega un hash para evitar problemas de caché
      }
    },
    assetsDir: 'assets', // Subdirectorio dentro de 'dist' para todos los activos estáticos
  }
});
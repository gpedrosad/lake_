import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // Asegúrate de importar 'path' para manejar rutas

export default defineConfig({
  base: '/lake_/', // Ajusta esto al nombre de tu repositorio
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Define aquí los recursos que deben tratarse como externos
        '/public/images/down6.jpg',
        '/public/images/down7.jpg'
      ]
    },
    // Ajusta la dirección del directorio de activos si es necesario
    assetsDir: path.resolve(__dirname, 'public'),
  }
});
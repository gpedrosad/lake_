import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/lake_/', // Ajusta esto al nombre de tu repositorio
  plugins: [react()],
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: import.meta.env.VITE_BASE_URL || "https://mern-ecommerce-backend-s0i1.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),  
      },
      "/uploads/": {
        target: import.meta.env.VITE_BASE_URL || "https://mern-ecommerce-backend-s0i1.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/uploads/, '/uploads'),  
      },
    },
  },
});

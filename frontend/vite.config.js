import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "https://mern-ecommerce-backend-f3fi.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/uploads/": {
        target: "https://mern-ecommerce-backend-f3fi.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://mern-ecommerce-backend-a4k7.onrender.com",
      "/uploads/": "https://mern-ecommerce-backend-a4k7.onrender.com",
    },
  },
});

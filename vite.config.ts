import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    // Enable HTTPS for local dev (optional). Run: npm run dev
    // Browser will show a certificate warning; click "Advanced" → "Proceed" to continue.
    https: process.env.VITE_HTTPS === "true",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

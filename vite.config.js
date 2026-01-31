import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,           // Makes the server accessible on your local network
    port: 5177,           // Default Vite port; can change if needed
    strictPort: false,    // Allows Vite to choose another port if 5173 is taken
    open: true,           // Opens browser automatically (optional)
  },
});

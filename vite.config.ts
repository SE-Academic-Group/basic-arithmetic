import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
 return {
   plugins: [react()],
   server: {
     port: 3000,
     host: true,
     esbuild: {
      target: "esnext",
      platform: "linux",
    },
  },
 };
});
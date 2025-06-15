import { defineConfig, loadEnv, process } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    preview: {
      port: parseInt(env.PORT) || 4173,
      host: true,
      allowedHosts: ["reelix.onrender.com"],
    },
  };
});

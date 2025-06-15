import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
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

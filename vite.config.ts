import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const envDefine: Record<string, string> = {};
  const serverEnv = loadEnv(mode, process.cwd(), "");

  for (const [key, value] of Object.entries(
    loadEnv(mode, process.cwd(), "VITE_"),
  )) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  // Load into process.env for local dev only — do not inline via `define` (Netlify secrets scan fails).
  for (const key of ["RESEND_API_KEY", "ENQUIRY_TO_EMAIL", "RESEND_FROM_EMAIL"] as const) {
    const value = serverEnv[key];
    if (value) {
      process.env[key] = value;
    }
  }

  return {
    define: envDefine,

    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },

    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
      }),
      react(),
      netlify(),
    ],

    server: {
      host: "::",
      port: 8080,
    },
  };
});

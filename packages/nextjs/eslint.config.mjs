import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js";

const nextConfig = Array.isArray(nextVitals)
  ? nextVitals
  : (nextVitals?.default ?? [nextVitals]);

export default defineConfig([
  ...nextConfig,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

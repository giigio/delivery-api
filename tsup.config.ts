import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "!src/**/*.d.ts"],
  outDir: "build",
  dts: false,
  splitting: false,
  clean: true,
  noExternal: ["@prisma/client"],
});

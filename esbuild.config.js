import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./src/app.ts"],
    bundle: true,
    platform: "node",
    keepNames: true,
    minify: true,
    outfile: "./dist/app-bundle.js",
  })
  .catch((e) => console.error(e));

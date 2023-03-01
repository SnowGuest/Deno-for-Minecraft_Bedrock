import * as esbuild from "https://deno.land/x/esbuild@v0.17.5/mod.js";
// let ts = 'let test: boolean = true'

const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();
const tsData = await Deno.readFile("main.ts");
const ts = decoder.decode(tsData);
const result = await esbuild.transform(ts, { loader: "ts" });
console.log(result.code)
const data = encoder.encode(result.code);
Deno.writeFile("../release/server/main.js", data);
esbuild.stop();

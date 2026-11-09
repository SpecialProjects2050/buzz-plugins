import { writeFile } from "node:fs/promises";
import { build } from "vite";

const result = await build({ build: { write: false } });
for (const output of Array.isArray(result) ? result : [result]) {
  for (const file of output.output) {
    await writeFile(new URL(file.fileName, import.meta.url),
      file.type === "chunk" ? file.code : file.source);
  }
}

import images from "../data.json" with { type: "json" }

/*
import { contentType } from "mediatypes";
import { encode } from "base64";
const __dirname = new URL(".", import.meta.url).pathname;

import {getImageSize} from "@lala/mieruko"

const imageRes = Array.from(
  Deno.readDirSync(`assets/theme`),
);

const images: {
  files: {
    name: string;
    type: string;
    path: string;
    dataURL: string;
    size: { height: string; width: string };
  }[];
  theme: string;
}[] = [];

imageRes.filter((x) => x.isDirectory).forEach((x) => {
  const currentDir = Array.from(
    Deno.readDirSync(`assets/theme/${x.name}`),
  );
  const files: {
    name: string;
    type: string;
    path: string;
    dataURL: string;
    size: { height: string; width: string };
  }[] = [];
  currentDir.sort((a, b) =>
    Number(a.name.split(".")[0]) - Number(b.name.split(".")[0])
  ).forEach((y) => {
    const path = `assets/theme/${x.name}/${y.name}`;
    const cType = contentType(
      y.name.split(".")[1],
    );

    const img = Deno.readFileSync(path);
    const base64 = encode(img);
    const size = getImageSize(img);
    files.push({
      type: cType || "image",
      path: `assets/theme/${x.name}/${y.name}`,
      dataURL: `data:${cType};base64,${base64}`,
      name: y.name,
      size: { height: String(size.height), width: String(size.width) },
    });
  });
  images.push({ files, theme: x.name });
});

Deno.writeTextFileSync("data.json", JSON.stringify(images))
*/
interface ImageElement {
  x: string;
  y: string;
  width: string;
  height: string;
  "xlink:href": string;
}

export function generate(count: number, theme: string): string {
  const imgs = (images.find((x) => x.theme === theme) || images[1]).files;
  const elements: ImageElement[] = [];
  const digits = String(count).padStart(7, "0").split("").map(Number);
  let i = 0, x = 0, y = 0;
  while (i < digits.length) {
    elements.push({
      x: String(x),
      y: "0",
      width: imgs[digits[i]].size.width,
      height: imgs[digits[i]].size.height,
      "xlink:href": imgs[digits[i]].dataURL,
    });
    x += Number(imgs[digits[i]].size.width) || 0;
    if ((Number(imgs[digits[i]].size.height) || 0) > y) {
      y = Number(imgs[digits[i]].size.height) || y;
    }
    i += 1;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${x}" height="${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>${
    elements.map((x) =>
      `<image x="${x.x}" y="0" width="${x.width}" height="${x.height}" xlink:href="${
        x["xlink:href"]
      }" />`
    ).join("")
  }</g>
  </svg>
  `;
}

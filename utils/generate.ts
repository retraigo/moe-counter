import imageSize from "https://esm.sh/image-size@1.0.2";
import {addZero} from "denouse"
import { contentType } from "mediatypes";
import { encode } from "base64";
const __dirname = new URL(".", import.meta.url).pathname;


interface ImageElement {
  x: string;
  y: string;
  width: string;
  height: string;
  "xlink:href": string;
}

export function generate(count: number, theme: string): string {
  const elements: ImageElement[] = [];

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${1}" height="${1}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

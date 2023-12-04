import { generate } from "../../../utils/generate.ts";
import { HandlerContext } from "$fresh/server.ts";
import db from "../../../utils/db.ts";

export const handler = (req: Request, ctx: HandlerContext): Response => {
  const name = ctx.params.name;
  let theme = new URL(req.url).searchParams.get("theme");
  if (!theme) theme = "gelbooru";
  const data = db.get(name);
  db.set(name, data.count + 1);
  return new Response(generate(data.count, theme), {headers: {"Content-Type": "image/svg+xml", 'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'}});
};

import { generate } from "../../../utils/generate.ts";
import { HandlerContext } from "$fresh/server.ts";
import db from "../../../utils/db.ts";

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
  const name = ctx.params.name;
  let theme = new URL(req.url).searchParams.get("theme");
  if (!theme) theme = "gelbooru";
  try {
    const data = await db.get(["count", name]);
    db.set(["count", name], (Number(data.value) || 0) + 1);
    return new Response(generate((Number(data.value) || 0), theme), {headers: {"Content-Type": "image/svg+xml", 'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'}});  
  } catch (e) {
    console.error(e)
    return new Response(generate((999999 || 0), theme), {headers: {"Content-Type": "image/svg+xml", 'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'}});
  }
};

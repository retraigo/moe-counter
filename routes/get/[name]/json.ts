import { HandlerContext } from "$fresh/server.ts";
import db from "../../../utils/db.ts"

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  const name = ctx.params.name;
  const data = db.get(name);
  db.set(name, data.count+1)
  return new Response(JSON.stringify(data));
};

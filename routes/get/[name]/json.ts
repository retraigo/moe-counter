import { HandlerContext } from "$fresh/server.ts";
import db from "../../../utils/db.ts";

export const handler = async (_req: Request, ctx: HandlerContext): Promise<Response> => {
  const name = ctx.params.name;
  const data = await db.get(["count", name]);
  db.set(["count", name], (Number(data.value) || 0) + 1);
  return new Response(
    JSON.stringify({ name: name, count: (Number(data.value) || 0) }),
  );
};

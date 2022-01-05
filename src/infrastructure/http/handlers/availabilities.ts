import { Context } from "koa";

export default function getAvailabilities(ctx: Context) {
  ctx.status = 500;
  ctx.body = {
    error: "Not implemented",
  };
}

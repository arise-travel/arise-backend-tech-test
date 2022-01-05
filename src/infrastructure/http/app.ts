import Koa from "koa";

import json from "koa-json";
import bodyparser from "koa-bodyparser";
import router from "./routes";

const app = new Koa();

app.use(json());
app.use(bodyparser());

app.use(router.routes()).use(router.allowedMethods());

export default app;

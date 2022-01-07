import config from "src/config";
import logger from "src/logger";
import app from "./app";
import router from "./routes";

export function startHttpServer(): typeof app {
  router.stack.forEach((route) =>
    logger.debug(`Registered route ${route.methods} ${route.path}`)
  );

  app.listen(config.httpPort, config.httpHost, () => {
    logger.info(`Server listening on ${config.httpHost}:${config.httpPort}`);
    logger.info(`Docs available at http://localhost:${config.httpPort}/docs`);
  });

  return app;
}

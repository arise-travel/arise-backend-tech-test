import { startHttpServer } from "./infrastructure/http";
import { validateConfig } from "./config";

validateConfig();
startHttpServer();

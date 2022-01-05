import { Logger } from "tslog";
import config from "./config";

const logger = new Logger({
  overwriteConsole: config.environment !== "production",
  minLevel: config.environment === "development" ? "silly" : "info",
  displayFunctionName: false,
});

export default logger;

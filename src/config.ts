import dotenv from "dotenv";
dotenv.config();

const config = {
  httpPort: Number(process.env.HTTP_PORT) || 8080,
  httpHost: process.env.HTTP_HOST || "0.0.0.0",
  graphqlEndpoint: process.env.GRAPHQL_ENDPOINT as string,
  environment: process.env.NODE_ENV || "development",
};

export default config;

/**
 * Checks that the config is valid
 */
export function validateConfig() {
  const requiredKeys: (keyof typeof config)[] = ["graphqlEndpoint"];

  requiredKeys.forEach((key) => {
    if (!config[key]) {
      throw new Error(`${key} is required`);
    }
  });
}

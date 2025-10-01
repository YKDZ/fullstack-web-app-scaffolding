import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in .env file");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/drizzle/schema/*",
  out: "./drizzle",

  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

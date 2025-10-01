import { drizzle as drizzleClient } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { element } from "./schema/element";
import { vector } from "./schema/vector";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export const drizzle = drizzleClient({
  client,
  schema: {
    ...element,
    ...vector,
  },
  casing: "snake_case",
});

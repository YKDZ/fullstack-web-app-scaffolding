import { relations } from "drizzle-orm";
import { pgTable, vector as pgVector, serial } from "drizzle-orm/pg-core";

export const vector = pgTable("Vector", {
  id: serial().primaryKey().notNull(),
  vector: pgVector({ dimensions: 768 }).notNull(),
});

export const vectorRelations = relations(vector, ({ one }) => ({
}));

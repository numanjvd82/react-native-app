import { db } from ".";

export const sql = String.raw;

export function initDb() {
  db.exec(sql`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      hashedPassword TEXT NOT NULL
    );
    `);
}
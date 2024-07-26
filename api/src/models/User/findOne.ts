import { db } from "../..";
import { FullUser } from "../../controllers/registerUser";
import { sql } from "../../dbInit";

export function findOne(email: string): FullUser | null {
  if (!email) {
    return null;
  }

  const stmt = db.prepare(sql`SELECT * FROM users WHERE email = ?`);
  const user = stmt.get(email);

  return user as FullUser;
}

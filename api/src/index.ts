import Database from "better-sqlite3";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { initDb } from "./dbInit";
import authenticateUser from "./middlewares/authenticate";
import authRouter from "./routes/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

export const db = new Database("app.db", {
  verbose: console.log,
});
db.pragma("journal_mode = WAL");

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.get("/", authenticateUser, (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  initDb();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

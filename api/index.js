import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});
app.post("/apples", (c) => {
  return c.json({ message: "Hello Apples!" });
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

import { createClient } from "@supabase/supabase-js";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import dotenv from "dotenv";

dotenv.config();
const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

app.post("/add", async (c) => {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data, error } = await supabase.from("todo").insert({});
    if (error) {
      throw { status: 500, message: "Error creating todo" };
    }
    return c.json({ message: "Hello Apples!" });
  } catch (error) {
    throw { status: 500, message: "Error creating todo" };
  }
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

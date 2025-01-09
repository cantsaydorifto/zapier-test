import { Hono } from "hono";
import { handle } from "hono/vercel";
import supabase from "./utils/supabase";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

app.post("/add", async (c) => {
  const { data, error } = await supabase.from("todo").insert({});
  if (error) {
    throw { status: 500, message: "Error creating todo" };
  }
  return c.json(data);
});

export default handle(app);

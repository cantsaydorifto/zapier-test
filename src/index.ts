import { Hono } from "hono";
import supabase from "../api/utils/supabase";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

app.post("/add", async (c) => {
  const { data, error } = await supabase.from("todo").insert({});
  if (error) {
    throw { status: 500, message: "Error creating todo" };
  }
  return c.json({ message: "Todo created" });
});

export default {
  port: 8080,
  fetch: app.fetch,
};

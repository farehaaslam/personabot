import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { addMessage, getMessages } from "./chatmemory.js";
import main from "./openai.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
let pathforret;
const app = express();

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.post("/message", async (req, res) => {
  const { role, content } = req.body;
  addMessage(role, content);
  await main(content);

  const msg = getMessages();
  res.json({ data: msg });
});
app.get("/allmessage", (req, res) => {
  const msg = getMessages();
  res.json({ data: msg });
});
app.listen(PORT, () => {
  console.log("server started in port 5000");
});
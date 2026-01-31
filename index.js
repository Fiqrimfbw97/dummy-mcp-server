import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/mcp", (req, res) => {
  res.json({
    name: "dummy-mcp-server",
    version: "1.0.0",
    tools: [],
    resources: [],
    prompts: []
  });
});


app.get("/.well-known/openai-domain-verification.txt", (req, res) => {
  const token = fs.readFileSync("verification.txt", "utf8");
  res.type("text/plain").send(token);
});

app.listen(PORT, () => {
  console.log("MCP dummy server running");
});

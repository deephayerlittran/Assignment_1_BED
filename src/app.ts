import express from "express";
 
const app = express();
app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: Date.now(),
    version: "1.0.0"
  });
});

export default app;
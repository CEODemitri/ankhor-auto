import express from "express";
import healthRoutes from "./routes/health.routes.js";

const app = express();

// built in middleware
app.use(express.json());
app.use("/api/health", healthRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
export default app;

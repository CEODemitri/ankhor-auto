import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import getGreeting from "./routes/getGreeting.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
// built in middleware
app.use(express.json());
app.use("/api/health", healthRoutes);
app.get("/api/greeting", getGreeting);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
export default app;

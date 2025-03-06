import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import jobSearchRoutes from "./routes/feature3Routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/interviews", interviewRoutes);
app.use("/api/v1/questions", questionRoutes);
app.use("/api/v1/jobs", jobSearchRoutes);

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});

export default app;

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./database/connection.js";
import dotenv from "dotenv";
import userRouter from "./router/userRoutes.js";
import feedbackRouter from "./router/feedbackRoutes.js";
import reqOrderRoutes from "./router/reqOrderRoutes.js";



// Environment variables
dotenv.config();

// Connect to the database
connectDB();

// Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.use("/api/user", userRouter); // User routes
app.use("/api/job", feedbackRouter); // Feedback routes
app.use("/api/order", reqOrderRoutes); // Request order routes

// Default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API!" });
});

// Start Server
const port = process.env.PORT || 8083;
app.listen(port, () => {
  console.log(`Server connected to Port - http://localhost:${port}`);
});

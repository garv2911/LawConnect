import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

/**
 * Middlewares
 */

// Allow requests from the frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Adds security headers
app.use(helmet());

// Logs incoming requests
app.use(morgan("dev"));

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

/**
 * Health Check Route
 */

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "LawConnect Backend is running 🚀",
  });
});

export default app;
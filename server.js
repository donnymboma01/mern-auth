import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./src/middlewares/errorHandler.js";

const port = process.env.port || 5000;
import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/config/db.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready and responding"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);

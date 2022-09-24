import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipeRouter from "./routes/recipeRoute.js";
import cors from "cors"

const app = express();
const port = 3000;
dotenv.config();
app.use(cors());
app.use(express.json());

const connectionToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connection to MongoDB is successful!");
  } catch (error) {
    console.error(error);
  }
};

app.use("/api", recipeRouter);

app.listen(port, () => { 
  connectionToDB();
  console.log(`Server started on port ${port}`);
});
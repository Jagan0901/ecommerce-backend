import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { productRoutes } from "./routes/productRoutes.js";
dotenv.config();

const app = express();

app.use(cors());




// const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = "mongodb://127.0.0.1:27017";

// async function createConnection() {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();
//   console.log("Mongo is connected");
//   return client;
// }

// export const client = await createConnection();
//interceptor || converting body to json
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/products", productRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

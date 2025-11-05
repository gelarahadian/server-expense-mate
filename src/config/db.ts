import mongoose from "mongoose";
import { mongoUri } from "./config";

const connectDB = () => {
    mongoose
      .connect(mongoUri)
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.error("MongoDB Connection Error:", err));

}

export default connectDB
import app from "./app";
import { port } from "./config/config";
import connectDB from "./config/db";

connectDB()

app.listen(port , () => {
  console.log(`Server running on http://localhost:${port}`);
});

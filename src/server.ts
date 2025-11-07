import app from "./app";
import { port } from "./config/config";
import connectDB from "./config/db";

connectDB();

// app.listen(port, () => {
//   console.log(`Server Running on http://localhost:${port}`);
// });

export default app;

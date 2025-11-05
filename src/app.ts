import routes from "./routes/routes";

import express from 'express'
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(routes)

export default app;
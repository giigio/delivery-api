import express from "express";

import { errorHandler } from "./middlewares/error-handler";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(routes);

export { app };

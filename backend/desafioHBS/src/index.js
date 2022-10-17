import express from "express";
import { productRouter } from "./routers/ProductRouter.js";

const PORT = 8080;
const app = express();

app.use("/api/productos", productRouter);

const server = app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`)
);

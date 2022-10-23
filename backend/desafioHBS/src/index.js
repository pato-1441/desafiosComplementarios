import express from "express";
import { productRouter } from "./routers/ProductRouter.js";
import { ViewsRouter } from "./routers/ViewsRouter.js";
import handlebars from "express-handlebars";
import {Server as HttpServer} from 'http';
import {Server as IOServer} from 'socket.io';

const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.json());

app.use("/api/productos", productRouter);
app.use("/", ViewsRouter);

const server = app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`)
);

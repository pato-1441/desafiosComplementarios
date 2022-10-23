import express from "express";
import { productRouter } from "./routers/ProductRouter.js";
import { ViewsRouter } from "./routers/ViewsRouter.js";
import handlebars from "express-handlebars";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

const PORT = 8080;
const app = express();

const server = new HttpServer(app);
const io = new IOServer(server);

io.on('connection', (socket)=>{
    console.log(`Se ha conectado un usuario: ${socket.id}`);
})

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
  );
  
  app.set("view engine", "hbs");
  app.set("views", "./public/templates");
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/productos", productRouter);
app.use("/", ViewsRouter);

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

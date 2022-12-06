import { Server } from "socket.io";
import { Productos, Mensajes } from "./db/db.js";

let io;

const initServer = (httpServer) => {
  io = new Server(httpServer);
  setEvents(io);
};

const setEvents = (io) => {
  const ProductosDB = new Productos();
  const MensajesDB = new Mensajes();

  io.on("connection", async (socketClient) => {
    console.log("A new client with the ID: ", socketClient.id, " has connected." );

    console.log(await ProductosDB.leerProductos());
    if ((await ProductosDB.leerProductos().length) !== 0) {
      emit("product-history", await ProductosDB.leerProductos());
    }

    console.log(await MensajesDB.leerMensajes());
    if ((await MensajesDB.leerMensajes().length) !== 0) {
      emit("message-history", await MensajesDB.leerMensajes());
    }

    socketClient.on("disconnection", () => {
      console.log("The client with the ID: ", socketClient.id, " has disconnected.");
    });

    socketClient.on("product", async (data) => {
      await ProductosDB.agregarProducto(data);
      emit("product", await ProductosDB.leerProductos());
    });

    socketClient.on("message", async (data) => {
      await MensajesDB.agregarMensaje(data);
      emit("message", await MensajesDB.leerMensajes());
    });
  });
};

const emit = (action, data) => {
  io.emit(action, data);
};

export { initServer, emit };

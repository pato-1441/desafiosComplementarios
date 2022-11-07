const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: SocketIOServer } = require("socket.io");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");

const {createMessagesTable} = require("./utils/index.js")
const {createProductsTable} = require("./utils/index.js")

createMessagesTable();
createProductsTable();

dayjs.extend(customParseFormat);

const Product = require("./models/product/product.model");
const Message = require("./models/message/message.model");
const { table } = require("console");

const app = express();
const httpServer = new HttpServer(app);
const io = new SocketIOServer(httpServer);

const PORT = 8080;

app.use(express.static("./public"));

httpServer.listen(PORT, () =>
  console.log(`Servidor escuchando en puerto: ${PORT}`)
);

io.on("connection", (socket) => {
  bringAllProducts(socket);
  bringAllMessages(socket);

  socket.on("new product", (newProduct) => {
    saveProduct(newProduct);
  });

  socket.on("new message", (message) => {
    saveMessage(message);
  });
});

// PRODUCTOS

const bringAllProducts = async (socket) => {
  const allProduct = await Product.getAll();
  socket.emit("all products", allProduct);
};

const saveProduct = async (newProduct) => {
  await Product.save(newProduct);
  const allProduct = await Product.getAll();
  io.sockets.emit("all products", allProduct);
};

// MENSAJES

const saveMessage = async (message) => {
  const date = new Date();
  const dateFormated = dayjs(date).format("DD/MM/YYYY hh:mm:ss");
  const newMessage = { ...message, createdAt: `${dateFormated} hs` };
  await Message.save(newMessage);
  const allMessage = await Message.getAll();
  io.sockets.emit("all messages", allMessage);
};

const bringAllMessages = async (socket) => {
  const allMessage = await Message.getAll();
  socket.emit("all messages", allMessage);
};

const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: SocketIOServer } = require('socket.io');

const Product = require("./models/product/product.model");

const app = express();
const httpServer = new HttpServer(app);
const io = new SocketIOServer(httpServer);

const PORT = 8080;

app.use(express.static("./public"));

httpServer.listen(PORT, ()=>console.log(`Servidor escuchando en puerto: ${PORT}`));

io.on('connection', socket => {
    bringAllProducts(socket)
})

const bringAllProducts = async(socket) => {
    const allProduct = await Product.getAll();    
    socket.emit("all products", allProduct);
    return allProduct;
};
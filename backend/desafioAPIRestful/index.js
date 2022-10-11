const fs = require('fs');
const express = require("express");
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Servidor escuchando en puerto: ${PORT}`)
);
server.on("error", (err) => console.log(`Error: ${err}`));
app.use(express.json());

const { Router } = express;
const router = Router();

const Contenedor = require("./Contenedor");
const productos = new Contenedor("./productos.txt");

router.get("/productos", async (req, res) => {
  await productos
    .getAll()
    .then((productos) => res.json(productos))
    .catch((error) => console.log(error));
});

router.get("/productos/:id", async (req, res) => {
  await productos
    .getAll()
    .then((productos) => {
      const id = parseInt(req.params.id);
      const productoEncontrado = productos.filter(
        (producto) => producto.id === id
      );
      if (productoEncontrado.length > 0) {
        res.json(productoEncontrado);
      } else {
        res.json({ error: "producto no encontrado" });
      }
    })
    .catch((error) => console.log(error));
});

router.post("/productos", async (req, res) => {
  const producto = req.body;
  await productos.save(producto);
  const allProducts = await productos.getAll();
  const lastProduct = allProducts[allProducts.length - 1];
  res.status(200).json(lastProduct);
});


router.put("/productos/:id", async (req, res) => {
  const allProducts = await productos.getAll();

  const id = parseInt(req.params.id);
  const foundProduct = allProducts.find(prod=>prod.id===id);

  const receivedProduct = req.body;
  let modifiedProduct = { id: id, ...receivedProduct };

  const replacedProducts = allProducts.map(prod=>prod.id===id ? modifiedProduct : prod)
  
  res.status(200).json(replacedProducts);
  await fs.promises.writeFile('productos.txt',JSON.stringify((replacedProducts),null,2),'utf-8');
  console.log(`Escritura realizada con éxito.`);

});

router.delete('/productos/:id', async (req,res) => {
    const id = parseInt(req.params.id);
    await productos.deleteById(id);

    res.status(200).json(`Producto eliminado con exito.`);
})

app.use("/api", router);
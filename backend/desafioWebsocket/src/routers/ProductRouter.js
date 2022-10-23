import { Router } from "express";
//import { ContainerMemory } from "../Containers/ContainerMemory.js";
import { ProductApi } from "../Api/ProductApi.js";

const productRouter = Router();

//const ProductMemory = new ContainerMemory();

productRouter.get("/", (req, res) => {
  const products = ProductApi.getAll();
  res.send({ success: true, data: products });
});

productRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = ProductApi.getById(id);
  if (!product) {
    res.send({
      success: false,
      data: undefined,
      message: "Element not found",
    });
  } else {
    res.send({ success: true, data: product });
  }
});

productRouter.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;

  const product = ProductApi.save({ title, price, thumbnail });

  res.send({ success: true, data: { id: product.id } });
});

productRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, thumbnail } = req.body;

  const updatedProduct = ProductApi.updateById(id, {
    title,
    price,
    thumbnail,
  });

  res.send({ success: true, data: { updated: updatedProduct } });
});

productRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  const products = ProductApi.deleteById(id);
  res.send({ success: true, data: products });
});

export { productRouter };

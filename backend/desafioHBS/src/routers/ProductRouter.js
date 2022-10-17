import { Router } from "express";
import { ContainerMemory } from "../Containers/ContainerMemory.js";

const productRouter = Router();

const ProductMemory = new ContainerMemory();

productRouter.get("/", (req, res) => {
  const products = ProductMemory.getAll();
  res.send({ success: true, data: products });
});

productRouter.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;

  const product = ProductMemory.save({ title, price, thumbnail });

  res.send({ success: true, data: { id: product.id } });
});

export { productRouter };

import { Router } from "express";
import { ProductApi } from "../Api/ProductApi.js";

const ViewsRouter = Router();

ViewsRouter.get("/", (req, res) => {
  const products = ProductApi.getAll();
  res.render("form-table-products", { productos: products });
});

ViewsRouter.post("/productos", (req, res) => {
  const { title, price, thumbnail } = req.body;
  ProductApi.save({ title, price, thumbnail });
  res.redirect("/");
});

export { ViewsRouter };

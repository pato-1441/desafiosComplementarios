import { Model, Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  price: Number,
  url: String,
});

const products = new Model("products", productSchema);

export default { products };

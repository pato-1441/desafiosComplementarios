import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  price: Number,
  url: String,
  stock: Number,
});

const products = mongoose.model("products", productSchema);

export { products };

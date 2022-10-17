import { Router } from "express";
import { ContainerMemory } from "../Containers/ContainerMemory.js";

const productRouter = Router();

const ProductMemory = new ContainerMemory();

productRouter.get('/',(req,res)=>{
    const products = ProductMemory.getAll();
    res.send({success:true, data:products});
});

export { productRouter };
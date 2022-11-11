import mongoose from "mongoose";
import {messageSchema, productSchema} from "./models/index.js"

const URI = 'mongodb://localhost:27017';

mongoose.connection(URI)
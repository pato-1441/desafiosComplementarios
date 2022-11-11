import { Model, Schema } from "mongoose";

const messageSchema = new Schema({
  message: String,
  timestamp: String,
});

const messages = new Model("messages", messageSchema);

export default { messages };

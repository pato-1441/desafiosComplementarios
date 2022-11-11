import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  message: String,
  timestamp: String,
});

const messages = mongoose.model("messages", messageSchema);

export { messages };

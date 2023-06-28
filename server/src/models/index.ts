import { Schema, model } from "mongoose";
import { Imessage } from "../interfaces";

const messageSchema = new Schema<Imessage>({
  password: { type: String, default: null },
  content: String,
  createdAt: { type: Date, default: Date.now() },
});

messageSchema.pre("save", function (next): void {
  this.password = crypto.randomUUID();
  next();
});

export default model<Imessage>("Message", messageSchema);

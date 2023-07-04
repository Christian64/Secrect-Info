import { Request, Response } from "express";
import { isAviable, decryptMessage } from "../utils/time";
import Message from "../models/index";

export const create = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const message = new Message({ content });
    await message.save();

    res.json(message);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};

export const messages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};

export const getMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const message = await Message.findById(id);
    if (!message) throw new Error("Message doesn't exist");

    if (isAviable(message)) throw new Error("Message block for timout");

    if (message?.password) {
      const isAuthorized = decryptMessage(message.password, password);
      if (!isAuthorized) throw new Error("Unauthorized");
    }
    res.json(message);
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

import { HydratedDocument } from "mongoose";
import { Imessage } from "../interfaces";
const MAXIME_MINUTES = 10;
export const minutesToMilliseconds = (minutes: number): number => {
  return minutes * 60000;
};

export const decryptMessage = (msgPassword: string, password: string) => {
  return password === msgPassword;
};

export const isAviable = (msg: HydratedDocument<Imessage>): boolean => {
  const currentDate = new Date().getTime();
  const createdDate = new Date(msg.createdAt).getTime();
  const endDate = createdDate + minutesToMilliseconds(MAXIME_MINUTES);

  return currentDate > endDate;
};

import axios from "axios";

export const getMessage = async ({ id, password }) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
    password,
  });
};

export const createMessage = async (content) => {
  return await axios.post(process.env.NEXT_PUBLIC_API_URL, {
    content,
  });
};

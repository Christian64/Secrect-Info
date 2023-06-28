import axios from "axios";

export const getMessage = async ({ id, password }) => {
  return await axios.post(`http://localhost:4004/${id}`, {
    password,
  });
};

export const createMessage = async (content) => {
  return await axios.post(`http://localhost:4004`, {
    content,
  });
};

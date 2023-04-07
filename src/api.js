import axios from "axios";

const fakeApi = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export const fetchProducts = () => {
  return fakeApi.get().then((res) => {
    return res.data;
  });
};

import axios from "axios";

const fakeApi = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default async function fetchProducts() {
  try {
    const response = await fakeApi.get();
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

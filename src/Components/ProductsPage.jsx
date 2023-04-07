import { useEffect, useState } from "react";

import { fetchProducts } from "../api";

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts().then((products) => {
      setProductsArr(products);
      setIsLoading(false);
    });
  }, []);

  const buildProductCard = () => {
    return productsArr.map((product) => {
      console.log(product);
      return <p key={product.id}>{product.title}</p>;
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h1>ALL PRODUCTS</h1>
      {buildProductCard()}
    </>
  );
}

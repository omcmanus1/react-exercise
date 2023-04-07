import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
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
      return <ProductCard key={product.id} product={product} />;
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

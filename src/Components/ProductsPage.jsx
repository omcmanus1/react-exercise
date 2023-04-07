import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import ProductCard from "./ProductCard";
import { fetchProducts } from "../api";

export default function ProductsPage({ basket, setBasket }) {
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
      return (
        <ProductCard
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      );
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="products-container">
      <Typography variant="h2">ALL PRODUCTS</Typography>
      {buildProductCard()}
    </div>
  );
}

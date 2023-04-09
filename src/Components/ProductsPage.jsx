import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import ProductCard from "./ProductCard";
import fetchProducts from "../api";

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const callApi = async () => {
      try {
        const products = await fetchProducts();
        setProductsArr(products);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    callApi();
  }, []);

  const buildProductCard = () => {
    return productsArr.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  };

  if (isLoading) return <Typography variant="h3">Loading...</Typography>;

  return (
    <div className="products-container">
      <Typography variant="h2">ALL PRODUCTS</Typography>
      {buildProductCard()}
    </div>
  );
}

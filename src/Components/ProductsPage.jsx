import { useEffect, useState } from "react";
import { Typography, Alert, CircularProgress } from "@mui/material";

import ProductCard from "./ProductCard";
import fetchProducts from "../api";

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productsArr, setProductsArr] = useState([]);

  const callApi = async () => {
    setIsLoading(true);
    try {
      const products = await fetchProducts();
      setProductsArr(products);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const buildProductCard = () => {
    return productsArr.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  };

  if (isLoading)
    return (
      <div className="products-container">
        <CircularProgress />
      </div>
    );

  return (
    <div className="products-container">
      <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
        All Products
      </Typography>
      {error ? (
        <Alert severity="error">Error Fetching Data!!</Alert>
      ) : (
        buildProductCard()
      )}
    </div>
  );
}

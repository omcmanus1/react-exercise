import { Card } from "@mui/material";

export default function ProductCard({ product }) {
  return <Card className="product-card">{product.title}</Card>;
}

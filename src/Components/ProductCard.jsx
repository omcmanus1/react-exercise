import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card className="product-card" raised={true}>
      <CardContent>
        <CardHeader
          className="product-image"
          title={product.title}
          subheader={`£${product.price}`}
        />
        <CardMedia
          className="product-image"
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ height: 140, objectFit: "contain" }}
        />
      </CardContent>
    </Card>
  );
}

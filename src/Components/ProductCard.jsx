import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card className="product-card" raised={true}>
      <CardContent>
        <CardHeader
          className="product-image"
          title={product.title}
          subheader={`£${product.price}`}
        />
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">
          Rating: {product.rating.rate} ({product.rating.count} votes)
        </Typography>
        <CardMedia
          className="product-image"
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ height: 140, objectFit: "contain", padding: 2 }}
        />
        <Typography variant="body2" sx={{ paddingLeft: 5, paddingRight: 5 }}>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

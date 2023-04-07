import { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }) {
  const [itemAdded, setItemAdded] = useState(false);
  console.log(itemAdded);

  const handleButtonClick = () => setItemAdded(!itemAdded);

  return (
    <Card className="product-card" raised={true}>
      <CardContent sx={{ alignContent: "center", justifyContent: "center" }}>
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
          sx={{ height: 140, objectFit: "contain", padding: 2 }}
        />
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">
          Rating: {product.rating.rate} ({product.rating.count} votes)
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          {product.description}
        </Typography>
        {itemAdded ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: "darkred" }}
            onClick={handleButtonClick}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ backgroundColor: "darkgreen" }}
            onClick={handleButtonClick}
          >
            Add To Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

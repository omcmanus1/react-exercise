import { useContext, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { BasketContext } from "../contexts/basket";

export default function ProductCard({ product }) {
  const [itemAdded, setItemAdded] = useState(false);
  const [basket, setBasket] = useContext(BasketContext);
  console.log(basket);

  const handleAddToCart = () => {
    setBasket([...basket, product.id]);
    setItemAdded(!itemAdded);
  };

  const handleRemoveFromCart = () => {
    setBasket(basket.filter((item) => item !== product.id));
    setItemAdded(!itemAdded);
  };

  return (
    <Card className="product-card" raised={true}>
      <CardContent sx={{ alignContent: "center", justifyContent: "center" }}>
        <CardHeader
          className="product-image"
          title={product.title}
          subheader={`£${product.price.toFixed(2)}`}
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
            onClick={handleRemoveFromCart}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ backgroundColor: "darkgreen" }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { BasketContext } from "../contexts/basket";
import CartButtons from "./CartButtons";

export default function ProductCard({ product }) {
  const [itemAdded, setItemAdded] = useState(false);
  const [basket, setBasket] = useContext(BasketContext);

  const addItem = () => {
    setItemAdded(true);
  };

  const removeItem = () => {
    setItemAdded(false);
  };

  return (
    <Card className="product-card" raised={true}>
      <CardContent>
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
          sx={styles.cardImage}
        />
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">
          Rating: {product.rating.rate} ({product.rating.count} votes)
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          {product.description}
        </Typography>
        <CartButtons
          itemAdded={itemAdded}
          addItem={addItem}
          removeItem={removeItem}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      </CardContent>
    </Card>
  );
}

const styles = {
  description: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  cardImage: { height: 140, objectFit: "contain", padding: 2 },
};

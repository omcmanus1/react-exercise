import { Button } from "@mui/material";

export default function CartButtons({
  itemAdded,
  addItem,
  removeItem,
  basket,
  setBasket,
  product,
}) {
  const buttonText = itemAdded ? "Remove From Cart" : "Add To Cart";

  const handleButtonClick = () => {
    if (itemAdded) {
      setBasket(basket.filter((item) => item !== product.id));
      removeItem();
    } else {
      setBasket([...basket, product.id]);
      addItem();
    }
  };

  return (
    <Button
      variant="contained"
      sx={
        itemAdded
          ? { backgroundColor: "#d32f2f" }
          : { backgroundColor: "#388e3c" }
      }
      onClick={handleButtonClick}
    >
      {buttonText}
    </Button>
  );
}

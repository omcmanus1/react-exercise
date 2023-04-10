import { Button } from "@mui/material";

export default function CartButtons({
  itemAdded,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  const buttonText = itemAdded ? "Remove From Cart" : "Add To Cart";

  return (
    <>
      <Button
        variant="contained"
        sx={
          itemAdded
            ? { backgroundColor: "#d32f2f" }
            : { backgroundColor: "#388e3c" }
        }
        onClick={itemAdded ? handleRemoveFromCart : handleAddToCart}
      >
        {buttonText}
      </Button>
    </>
  );
}

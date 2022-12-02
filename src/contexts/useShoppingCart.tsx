import { useContext } from "react";
import { ShoppingCartContext } from "./shopping-cart-context";

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error("useShoppingCart must be used within the ShoppingCartProvider");
  }

  return context;
};

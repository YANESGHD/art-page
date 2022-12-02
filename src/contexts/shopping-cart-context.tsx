import { createContext, useState, FC } from 'react';

interface ShoppingCartProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface ShoppingItem {
  name: string;
  price: number;
  quantityRequested: number;
}

interface ShoppingCart {
  [key: string]: ShoppingItem
}

interface ShoppingCartContextInterface {
  cartItems: ShoppingCart,
  handleItemUpdate: (product: ShoppingItem) => void,
}

export const ShoppingCartContext = createContext<ShoppingCartContextInterface>({
  cartItems: {},
  handleItemUpdate: () => { },
});

export const ShoppingCartContextWrapper: FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ShoppingCart>({});

  const handleItemUpdate = (product: ShoppingItem) => {
    const currShoppingList = { ...cartItems }

    /**
     * Add or update quantity of item to the cart list
     */
    if (currShoppingList[product.name]) {
      currShoppingList[product.name].quantityRequested += product.quantityRequested
    } else {
      currShoppingList[product.name] = product
    }

    /**
     * If updated total quantity of requested item is equal/below 0
     * we want to remove it from the shopping cart
     */
    if (currShoppingList[product.name].quantityRequested <= 0) {
      delete currShoppingList[product.name]
    }

    setCartItems(currShoppingList)
  }

  const contextValue = {
    cartItems,
    handleItemUpdate,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
  );
};

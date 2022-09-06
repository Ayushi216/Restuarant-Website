import { useContext, useState } from "react";
import Cart from "../components/Cart/Cart";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const CartCntx = useContext(CartContext);
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const removeItemHandler = (id) => {
    console.log(id);
    const ele = document.getElementById(`cart-item-${id}`);
    ele.remove();

    let itemToRemove = CartCntx.items.findIndex((item) => item.id === id);
    const items = [...CartCntx.items]
    const updatedItems = items.splice(itemToRemove, 1);
    console.log(updatedItems);

    setItems(updatedItems);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

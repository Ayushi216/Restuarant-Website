import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  let totalAmount = 0;
  cartCntx.items.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map((item) => (
        <li>
          <CartItem key={item.id} quantity={item.quantity} price={item.price} name={item.name}/>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

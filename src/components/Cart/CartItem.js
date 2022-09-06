import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';
//import CartProvider from '../../store/CartProvider';
import { useContext } from 'react';


const CartItem = (props) => {
  const cartCntx = useContext(CartContext);
  //const price = `$${props.price.toFixed(2)}`;

  const onRemoveHandler = (event) => {
    //const ele = document.getElementById(`cart-item-${props.id}`)
    //console.log(ele)
   
    cartCntx.removeItemHandler(props.id)
  }
  const onAddHandler = (props) => {

  }

  return (
    <li className={classes['cart-item'] } id = {`cart-item-${props.id}`}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

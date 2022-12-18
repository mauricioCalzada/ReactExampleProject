import { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
  const cartCtx = useContext(CartContext);
  const price = `$24`;
  const newStr = price.split('$').join("");
  const newPrice = Number(newStr);


  const addToCartHadler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: newPrice
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={classes.description}>Generic Description</div>
        <div className={classes.price}>{price}</div>
        <img className={classes.image} src={props.image} />
      </div>
      <div>
        <div>
          <MealItemForm onAddToCart={addToCartHadler} />
        </div>
      </div>
    </li>
  );
};
export default MealItem;

import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Mauricio Calzada React E-commerce example</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="Table full of food" />
    </div>
  </Fragment>
};
export default Header;
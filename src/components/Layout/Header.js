import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../Assests/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>TokoMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} onClose={props.CartisHidden}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious meals" />
      </div>
    </React.Fragment>
  );
};
export default Header;

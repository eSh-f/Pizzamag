import React from "react";
import Header from "../components/Header";
import "../styles/app.scss";
import styles from "../styles/components/Cart.module.scss";
import CartItem from "../components/cart/CartItem";
const Cart = () => {
  return (
    <div>
      <CartItem />
    </div>
  );
};

export default Cart;

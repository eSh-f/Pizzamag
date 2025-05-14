import React from "react";
import styles from "../styles/components/Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const CartButton = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.total);
  const cartItem = useSelector((state: RootState) => state.cart.item);

  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate("/cart");
  };

  return (
    <button className={styles.cartButton} onClick={handleClickCart}>
      <span>
        <p>{totalPrice} Р</p>
      </span>
      <div className={styles.divider}></div>
      <span>{cartItem.length}</span>
    </button>
  );
};

export default CartButton;

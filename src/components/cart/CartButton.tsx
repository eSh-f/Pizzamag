import React from "react";
import styles from "../../styles/components/Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const CartButton = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.total);
  const cartItem = useSelector((state: RootState) => state.cart.item);

  const totalItems = cartItem.reduce((sum, obj) => sum + obj.quantity, 0);

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
      <span>{totalItems}</span>
    </button>
  );
};

export default CartButton;

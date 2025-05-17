import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import {
  addItem,
  clearCart,
  minusItem,
  removeItem,
} from "../../Redux/slices/cartSlice";
import type { CartItem as TCartItem } from "../../Redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/components/Cart.module.scss";
import Header from "../Header";
import CartNull from "./CartNull";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.item);
  console.log(cartItems);
  const price = useSelector((state: RootState) => state.cart.total);
  const allQuantity = useSelector((state: RootState) =>
    state.cart.item.reduce((sum, obj) => sum + obj.quantity, 0),
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  const handlePlus = (item: TCartItem) => {
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        size: item.size,
        type: item.type,
      }),
    );
  };

  const handleRemoveItem = (item: TCartItem) => {
    dispatch(
      removeItem({
        id: item.id,
        type: item.type,
        size: item.size,
      }),
    );
  };

  const handleMinus = (item: TCartItem) => {
    dispatch(
      minusItem({
        id: item.id,
        size: item.size,
        type: item.type,
      }),
    );
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContent}>
        <Header />
        {cartItems.length === 0 ? (
          <CartNull />
        ) : (
          <>
            <div className={styles.cartHeader}>
              <h5>🗑️Корзина</h5>{" "}
              <button onClick={handleClearCart}>🚫Очистить корзину</button>
            </div>
            {cartItems.map((item) => (
              <div className={styles.cartItem}>
                <div className={styles.pizzaInfo}>
                  <img src={item.imageUrl} alt="" />
                  <div className={styles.pizzaInfoTitle}>
                    <p>{item.name}</p>{" "}
                    <p>
                      {item.type}, {item.size}
                    </p>
                  </div>
                </div>
                <div className={styles.pizzaButton}>
                  <button onClick={() => handleMinus(item)}>-</button>{" "}
                  <i>{item.quantity}</i>{" "}
                  <button onClick={() => handlePlus(item)}>+</button>
                </div>
                <p>{item.price} Р</p>
                <button onClick={() => handleRemoveItem(item)}>x</button>
              </div>
            ))}

            <div className={styles.cartBottomInfo}>
              <p>
                Всего пицц: <b>{allQuantity} шт.</b>
              </p>
              <p>Сумма заказа: {price} Р</p>
            </div>
            <div className={styles.cartBottomButton}>
              <button className="cartButton" onClick={handleBackPage}>
                Вернуться назад
              </button>
              <button className="cartButton">Оплатить сейчас</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import Header from "../components/Header";
import "../styles/app.scss";
import styles from "../styles/components/Cart.module.scss";
import { RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/slices/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.item);
  const price = useSelector((state: RootState) => state.cart.total);
  const quantity = useSelector((state: RootState) =>
    state.cart.item.reduce((sum, obj) => sum + obj.quantity, 0),
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContent}>
        <Header />
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
              <button>-</button> <i>2</i> <button>+</button>
            </div>
            <p>{item.price} Р</p>
            <button>x</button>
          </div>
        ))}

        <div className={styles.cartBottomInfo}>
          <p>
            Всего пицц: <b>{quantity} шт.</b>
          </p>
          <p>Сумма заказа: {price} Р</p>
        </div>
        <div className={styles.cartBottomButton}>
          <button className="cartButton">Вернуться назад</button>
          <button className="cartButton">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

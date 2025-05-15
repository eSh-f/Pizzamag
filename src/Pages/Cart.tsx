import React from "react";
import Header from "../components/Header";
import "../styles/app.scss";
import styles from "../styles/components/Cart.module.scss";
import { RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, clearCart, minusItem } from "../Redux/slices/cartSlice";
const Cart = () => {
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

const handlePlus = (item: CartItem) => {
}



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
              <button>-</button> <i>{item.quantity}</i> <button>+</button>
            </div>
            <p>{item.price} Р</p>
            <button>x</button>
          </div>
        ))}

        <div className={styles.cartBottomInfo}>
          <p>
            Всего пицц: <b>{allQuantity} шт.</b>
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

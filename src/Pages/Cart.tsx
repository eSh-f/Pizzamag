import React from "react";
import Header from "../components/Header";
import "../styles/app.scss";
import styles from "../styles/components/Cart.module.scss";
const Cart = () => {
  const cardPizza = [1, 2, 3, 4];

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContent}>
        <Header />
        <div className={styles.cartHeader}>
          <h5>🗑️Корзина</h5> <button>🚫Очистить корзину</button>
        </div>
        <div className={styles.cartItem}>
          <div className={styles.pizzaInfo}>
            img
            <div className={styles.pizzaInfoTitle}>
              <p>Сырная пицца</p> <p>тонкое тесто, 26см</p>
            </div>
          </div>
          <div className={styles.pizzaButton}>
            <button>-</button> <i>2</i> <button>+</button>
          </div>
          <p>770 Р</p>
          <button>x</button>
        </div>
        <div className={styles.cartBottomInfo}>
          <p>
            Всего пицц: <b>3шт.</b>
          </p>
          <p>Сумма заказа: 900 Р</p>
        </div>
        <div className={styles.cartBottomButton}>
          <button>Вернуться назад</button>
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

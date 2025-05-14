import React, { FC, useState } from "react";

import styles from "../../styles/components/PizzaCard.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { addItem } from "../../Redux/slices/cartSlice";

interface IPizzaItemProps {
  key: number;
  imageUrl: string;
  name: string;
  price: number;
}

const PizzaItem: FC<IPizzaItemProps> = ({ key, name, imageUrl, price }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typePizzas = ["тонкое", "традиционное"];
  const sizePizzas = ["26см.", "30см.", "40см."];
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) =>
    state.cart.item.reduce((sum, obj) => sum + obj.quantity, 0),
  );

  const selectPizza = {
    id: key,
    name: name,
    imageUrl: imageUrl,
    price: price,
    size: sizePizzas[activeSize],
    type: typePizzas[activeType],
  };

  const handleAddPizza = () => {
    dispatch(addItem(selectPizza));
  };

  return (
    <div className={styles.pizzaCard}>
      <img src={imageUrl} alt="pizza" />
      <h5>{name}</h5>
      <div className={styles.pizzaOptions}>
        <ul className={styles.types}>
          {typePizzas.map((typePizza, index) => (
            <li
              onClick={() => setActiveType(index)}
              className={classNames(styles.pizzaOptionsItems, {
                [styles.isActive]: activeType === index,
              })}
              key={index}
            >
              {typePizza}
            </li>
          ))}
        </ul>

        <ul className={styles.sizes}>
          {sizePizzas.map((sizePizza, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={classNames(styles.pizzaOptionsItems, {
                [styles.isActive]: activeSize === index,
              })}
              key={index}
            >
              {sizePizza}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <p className={styles.price}>от {price}</p>

        <button className={styles.addButton} onClick={handleAddPizza}>
          <span>+ Добавить </span>
          <i>{quantity}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;

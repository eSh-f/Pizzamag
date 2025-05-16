import React, { FC, useState } from "react";

import styles from "../../styles/components/PizzaCard.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { addItem } from "../../Redux/slices/cartSlice";

interface IPizzaItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

const PizzaItem: FC<IPizzaItemProps> = ({ id, name, imageUrl, price }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typePizzas = ["тонкое", "традиционное"];
  const sizePizzas = ["26", "30", "40"];
  const dispatch = useDispatch();


  const count = useSelector(
    (state: RootState) =>
      state.cart.item.find(
        (item) =>
          item.id === id &&
          item.type === typePizzas[activeType] &&
          item.size === sizePizzas[activeSize],
      )?.quantity || 0,
  );

  const selectPizza = {
    id: id,
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
          <i>{count}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;

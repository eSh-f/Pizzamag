import React, { FC, useState } from "react";

import styles from "../../styles/components/PizzaCard.module.scss";
import classNames from "classnames";

interface IPizzaItemProps {
  image: string;
  name: string;
  price: number;
}

const PizzaItem: FC<IPizzaItemProps> = ({ name, image, price }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typePizzas = ["тонкое", "традиционное"];
  const sizePizzas = ["26см.", "30см.", "40см."];

  return (
    <div className={styles.pizzaCard}>
      <img src={image} alt="pizza" />
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

        <button className={styles.addButton}>
          <span>+ Добавить </span>
          <i>{2}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;

import React, { useState } from "react";
import classNames from "classnames";
import styles from "../styles/components/Categories.module.scss";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories: string[] = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Сырные",
    "Острые",
  ];

  return (
    <ul className={styles.categories}>
      {categories.map((item, index) => (
        <li
          onClick={() => setActiveIndex(index)}
          className={classNames(styles.categoryItem, {
            [styles.isActive]: activeIndex === index,
          })}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Categories;

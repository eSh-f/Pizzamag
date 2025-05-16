import React from "react";
import classNames from "classnames";
import styles from "../styles/components/Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setCategory } from "../Redux/slices/filterSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state: RootState) => state.filter.category);
const setActiveCategory = (category: number) => {
  dispatch(setCategory(category));
}

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
          onClick={() => setActiveCategory(index)}
          className={classNames(styles.categoryItem, {
            [styles.isActive]: activeCategory === index,
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

import React, { useCallback } from "react";
import classNames from "classnames";
import styles from "../../styles/components/Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setCategory } from "../../Redux/slices/filterSlice";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.filter.category,
  );
  const handleClick = useCallback(
    (index: number) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

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
        <CategoriesItem
          index={index}
          label={item}
          isActive={activeCategory === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
};

export default Categories;

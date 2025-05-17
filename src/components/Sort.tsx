import React, { useState } from "react";

import styles from "../styles/components/Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../Redux/slices/filterSlice";
import { RootState } from "../Redux/store";
import { SortOptions } from "../types/types";

const Sort = () => {
  const dispatch = useDispatch();
  const selectedValue = useSelector(
    (state: RootState) => state.filter.sortType,
  );
  const sortValue: SortOptions[] = [
    { label: "rating", value: "рейтингу" },
    { label: "price", value: "стоимости" },
    { label: "abc", value: "алфавиту" },
  ];

  const handleChange = (event: any) => {
    dispatch(setSortType(event.target.value));
  };

  return (
    <div className={styles.sort}>
      <p>Сортировка по:</p>
      <select value={selectedValue} onChange={handleChange}>
        {sortValue.map((option) => (
          <option key={option.label} value={option.label}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;

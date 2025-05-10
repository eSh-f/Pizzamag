import React from "react";

import styles from "../styles/components/Sort.module.scss";

const Sort = () => {
  return (
    <div className={styles.sort}>
      <p>Сортировка по:</p>
      <select>
        <option value="star">популярности</option>
        <option value="price">по цене</option>
        <option value="abc">по алфавиту</option>
      </select>
    </div>
  );
};

export default Sort;

import React, { useState } from "react";
import styles from "../styles/components/Search.module.scss"
import { RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../Redux/slices/filterSlice";
const Search = () => {
  const  dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.filter.searchValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <div>
      <div className={styles.wrapperSearch}>
        🔍
        <input value={searchValue} onChange={handleChange} placeholder="Найдите свою пиццу..." />
      </div>
    </div>
  );
};

export default Search;

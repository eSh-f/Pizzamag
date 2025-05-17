import React, { useEffect, useMemo, useState } from "react";
import styles from "../styles/components/Search.module.scss";
import { RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../Redux/slices/filterSlice";
import debounce from "lodash/debounce";
const Search = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue,
  );

  const debouncedDispatch = useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 450),
    [dispatch],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedDispatch(event.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  return (
    <div>
      <div className={styles.wrapperSearch}>
        <input
          value={value}
          onChange={handleChange}
          placeholder="Найдите свою пиццу..."
        />
      </div>
    </div>
  );
};

export default Search;

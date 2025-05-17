import React from "react";
import { useGetAllPizzasQuery } from "../../Redux/pizzaApi";
import PizzaItem from "./PizzaItem";
import "../../App.css";
import Skeleton from "../Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const PizzaLIst = () => {
  const category = useSelector((state: RootState) => state.filter.category);
  const sortBy = useSelector((state: RootState) => state.filter.sortType);
  const search = useSelector((state: RootState) => state.filter.searchValue);
  const { data = [], isLoading } = useGetAllPizzasQuery({
    search,
    sortBy,
    category,
  });

  const pizza = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="pizzaList">
      {!isLoading && pizza.length === 0 && <p>Пиццы не найдены!</p>}
      {isLoading
        ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        : pizza.map((p) => (
            <PizzaItem
              key={p.id}
              id={p.id}
              price={p.price}
              name={p.name}
              imageUrl={p.imageUrl}
            />
          ))}
    </div>
  );
};

export default PizzaLIst;

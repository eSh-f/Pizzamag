import React from "react";
import { useGetAllPizzasQuery } from "../../Redux/pizzaApi";
import PizzaItem from "./PizzaItem";
import "../../App.css";
import Skeleton from "../Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const PizzaLIst = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.filter.searchValue,
  );
  const { data = [], isLoading } = useGetAllPizzasQuery(searchQuery);

  return (
    <div className="pizzaList">
      {isLoading
        ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        : data.map((p) => (
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

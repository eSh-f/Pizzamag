import React from "react";
import { useGetAllPizzasQuery } from "../../Redux/pizzaApi";
import PizzaItem from "./PizzaItem";
import "../../App.css";
import Skeleton from "../Skeleton";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/slices/cartSlice";

const PizzaLIst = () => {
  const { data = [], isLoading } = useGetAllPizzasQuery();

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

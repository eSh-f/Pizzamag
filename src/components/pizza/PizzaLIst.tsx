import React from "react";
import { useGetAllPizzasQuery } from "../../Redux/pizzaApi";
import PizzaItem from "./PizzaItem";
import "../../App.css";
import Skeleton from "../Skeleton";

const PizzaLIst = () => {
  const { data = [], isLoading } = useGetAllPizzasQuery();

  return (
    <div className="pizzaList">
      {isLoading
        ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        : data.map((p) => (
            <PizzaItem
              key={p.id}
              price={p.price}
              name={p.name}
              image={p.imageUrl}
            />
          ))}
    </div>
  );
};

export default PizzaLIst;

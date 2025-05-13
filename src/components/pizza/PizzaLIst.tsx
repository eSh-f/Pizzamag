import React from "react";
import { useGetAllPizzasQuery } from "../../Redux/pizzaApi";
import PizzaItem from "./PizzaItem";
import "../../App.css";

const PizzaLIst = () => {
  const { data = [], error, isLoading } = useGetAllPizzasQuery();

  console.log(data.map((p) => p.imageUrl));

  return (
    <div className="pizzaList">
      {data.map((p) => (
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

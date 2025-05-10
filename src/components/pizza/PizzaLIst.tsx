import React from "react";
import { useGetAllPizzasQuery } from "../../Redux/pizzaApi";
import PizzaItem from "./PizzaItem";
import "../../App.css";

const PizzaLIst = () => {
  const { data = [], error, isLoading } = useGetAllPizzasQuery();

  console.log(data.map((p) => p.types));

  return (
    <>
      <ul className="pizzaList">
        {data.map((p, index) => (
          <PizzaItem
            key={index}
            price={p.price}
            name={p.name}
            image={p.imageUrl}
          />
        ))}
      </ul>
    </>
  );
};

export default PizzaLIst;

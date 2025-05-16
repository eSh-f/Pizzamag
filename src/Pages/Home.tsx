import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaLIst from "../components/pizza/PizzaLIst";
import "../styles/app.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <Header />
        <div className="pizzaOptions">
          <Categories />
          <Sort />
        </div>
        <h4>Все пиццы</h4>
        <PizzaLIst />
      </div>
    </div>
  );
};

export default Home;

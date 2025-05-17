import React from "react";
import { useNavigate } from "react-router-dom";

const CartNull = () => {
  const navigate = useNavigate();
  return (
    <div className="cartNull">
      <img src="/pizzas.png" alt="pizzano" />
      <button className="cartButton" onClick={() => navigate("/")}>
        Выбрать пиццу{" "}
      </button>
    </div>
  );
};

export default CartNull;

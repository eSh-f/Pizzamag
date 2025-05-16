import React from "react";
import styles from "../styles/components/Header.module.scss";
import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div onClick={() => navigate("/")} className={styles.logo}>
        <img
          src="https://media.istockphoto.com/id/901501348/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D1%83%D1%81%D0%BE%D1%87%D0%B5%D0%BA-%D1%80%D0%B0%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%81%D1%8B%D1%80%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D0%BF%D0%B8%D1%86%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=7Dcd91YUQnPr7rR0btc9CtF80LALaIenLHxjBa9YzjY="
          alt="pizzalogo"
        />
        <div className={styles.wrapper}>
          <span className={styles.title}>
            <p>REACT PIZZA</p>
          </span>
          <span className={styles.description}>
            <p>Самая вкусная пицца в мире</p>
          </span>
        </div>
      </div>
      <div>
        <Search />
      </div>
      <CartButton />
    </div>
  );
};

export default Header;

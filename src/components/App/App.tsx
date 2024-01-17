import { Brands } from "../Brands/Brands";
import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";

import { Routers } from "../Routers/Routers";
import classes from "./App.module.css";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div className={classes.haupt}>
      <Header />
      <Promo />
      <Brands />
      <Link to={`/cards`} className={classes.link}>
        {/* <a className="link" href={`/cards`}>
          Каталог товаров
        </a> */}
        <h1>Leben in Russland und in Deutschland</h1>
      </Link>

      <Routers />
    </div>
  );
};

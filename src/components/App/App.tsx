import { Brands } from "../Brands/Brands";
import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";
import { Cards } from "../Cards/Cards";
import { Video } from "../Video/Video";
import { Footer } from "../Footer/Footer";
import { Mail } from "../Mail/Mail";

import { Routers } from "../Routers/Routers";
import classes from "./App.module.css";
import { Link } from "react-router-dom";
import { Arrivals } from "../Arrivals/Arrivals";

export const App = () => {
  return (
    <div className={classes.haupt}>
      <Header />
      <Promo />
      <Brands />
      <Cards />
      <Video />
      <Arrivals />
      <Mail />
      <Footer />
      <Routers />
    </div>
  );
};

{
  /* <Link to={`/cards`} className={classes.link}>
     
        <h1>Leben in Russland und in Deutschland</h1>
      </Link> */
}

{
  /* <a className="link" href={`/cards`}>
          Каталог товаров
        </a> */
}

import { Routers } from "../Routers/Routers";
import classes from "./App.module.css";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div className={classes.haupt}>
      <Link to={`/cards`} className={classes.link}>
        <a className="link" href={`/cards`}>
          Каталог товаров
        </a>
        <h1>О жизни в Германии</h1>
      </Link>

      <Routers />
    </div>
  );
};

import classes from "./Brands.module.css";
import promoImg from "../../img/promo/Kölner_Dom_von_Osten.jpg";

export const Brands = () => {
  return (
    <section className={classes.brands}>
      <div className="container">
        <ul className={classes.brands__list}>
          <li>
            <a href={`/cards`}>Язык</a>
          </li>
          <li>
            <a href={`/cards`}>Школа</a>
          </li>
          <li>
            <a href={`/cards`}>Культура</a>
          </li>
          <li>
            <a href={`/cards`}>Менталитет</a>
          </li>
          <li>
            <a href={`/cards`}>Дети</a>
          </li>
          <li>
            <a href={`/cards`}>Работа</a>
          </li>
          <li>
            <a href={`/cards`}>Питание</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

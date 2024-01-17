import classes from "./Promo.module.css";
import promoImg from "../../img/promo/Kölner_Dom_von_Osten.jpg";
import { Link } from "react-router-dom";
export const Promo = () => {
  return (
    <section className={classes.promo}>
      <div className="container">
        <div className={classes.promo__content}>
          <div className={classes.promo__text}>
            <div className={classes.promo__title}>
              <span className={classes.highlight}>
                <span>Германия -</span>
              </span>
              - замечательная
              <span
                className={classes.highlight + " " + classes.highlight__yellow}
              >
                <span>страна</span>
              </span>
            </div>
            <div className={classes.promo__desc}>Узнаем ее поближе?</div>
            <div className={classes.promo__btn__wrapper}>
              <a href={`/cards`} className={classes.promo__btn}>
                конечно!
              </a>
            </div>
          </div>
          <div className={classes.promo__img}>
            <img src={promoImg} alt="Dom" />
          </div>
        </div>
      </div>
    </section>
  );
};

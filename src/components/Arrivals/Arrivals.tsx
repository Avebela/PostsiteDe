import classes from "./Arrivals.module.css";
import promoImg from "../../img/promo/Kölner_Dom_von_Osten.jpg";
import { useGetCardsQuery } from "../../services/cards";
import { Card } from "../Arrivals/CardRec/Card";
//import { Form } from "../Form/Form";

export const Arrivals = () => {
  const { data = [], isError, isLoading } = useGetCardsQuery();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center">{isError}</p>;

  return (
    <section className={classes.arrivals}>
      <div className="container">
        <div className={classes.arrivals__header}>
          <h2 className="title2">Рекомендуем</h2>
        </div>
        <div className={classes.arrivals__cards}>
          {data?.map((card) => (
            <Card key={card.id} {...card} />
          ))}
          {/* <div className={classes.arrivals__card}>Card 1</div>
          <div className={classes.arrivals__card}>Card 2</div>
          <div className={classes.arrivals__card}>Card 3</div>*/}
        </div>
      </div>
    </section>
  );
};

import { useGetCardsQuery } from "../../services/cards";
import { Card } from "./Card/Card";
//import { Form } from "../Form/Form";
import classes from "./Cards.module.css";

export const Cards = () => {
  const { data = [], isError, isLoading } = useGetCardsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;
  return (
    <section className={classes.cards}>
      <div className="container">
        <div className={classes.cards__header}>
          <h2 className="title2">Свежие статьи</h2>
        </div>
        <div className={classes.cards__cards}>
          {data?.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

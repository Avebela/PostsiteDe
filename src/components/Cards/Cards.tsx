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
          {data
            ?.filter((card) => {
              // return card.id == "1" || card.id == "2";
              return card.updatedAt > `2024-01-19T21:21:47.563Z`;
            })
            .map((card) => (
              <Card key={card.id} {...card} />
            ))}
        </div>
      </div>
    </section>
  );
};

// https://vivasart.com/lab/javascript-chaining-map-filter-i-reduce

// "https://ru.stackoverflow.com/questions/830371/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B9-%D0%B8-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9-%D0%B4%D0%B0%D1%82%D1%8B-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2"

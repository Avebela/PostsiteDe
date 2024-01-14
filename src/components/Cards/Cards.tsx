import { useGetCardsQuery } from "../../services/cards";
import { Card } from "../Card/Card";
//import { Form } from "../Form/Form";
import classes from "./Cards.module.css";

export const Cards = () => {
  const { data = [], isError, isLoading } = useGetCardsQuery();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center">{isError}</p>;
  return (
    <div className={classes.post_wrap}>
      {data?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

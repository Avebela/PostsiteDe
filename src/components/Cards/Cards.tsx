import { useGetCardsQuery } from "../../services/cards";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";

export const Cards = () => {
  const { data = [], isError, isLoading } = useGetCardsQuery();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center">{isError}</p>;
  return (
    <div>
      <Form />
      Карточки
      {data?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

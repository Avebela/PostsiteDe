//import { Link } from "react-router-dom";
//import classes from "./FullCard.module.css";
import { FC } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCardByIdQuery,
  useDeleteCardMutation,
  useUpdeteCardMutation,
} from "../../services/cards";

export const FullCard: FC = ({}) => {
  const { id } = useParams();
  console.log(useParams());

  const { data: card } = useGetCardByIdQuery({ id });

  const [updateCard, { isLoading: isUpdating }] = useUpdeteCardMutation();
  const [deleteCard, { isLoading: isDeleting }] = useDeleteCardMutation();

  return (
    <div>
      {card ? (
        <>
          <img src={card.img} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <h3>История</h3>
          <p>{card.story}</p>
          <button onClick={() => updateCard(card)}>Изменить</button>
          <button onClick={() => deleteCard(card.id)}>Удалить</button>
        </>
      ) : (
        <p>Загрузка....</p>
      )}
    </div>
  );
};

import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import { FC } from "react";

interface Props {
  title: string;
  description?: string;
  story?: string;
  img?: string;
  id?: string;
}
export const Card: FC<Props> = ({ title, description, story, img, id }) => {
  return (
    <Link to={`/cards/${id}`}>
      Карточка: {id}
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
      <p>{story}</p>
    </Link>
  );
};

// {data.map((card) => (
//   <li
//     key={card.id}
//     className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
//   >
//   //  <Card key={card.id}/>;
//     {card.title}
//   </li>
// ))}

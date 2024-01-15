import { Link } from "react-router-dom";
import classes from "./Card.module.css";
//import classes from "../Links/Links.module.css";
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
    <div className={classes.post_item}>
      <div className={classes.item_content}>
        <div className={classes.item_icon + " " + classes.group}></div>
        <div className={classes.item_body}>
          <h3>
            {id} {title}
          </h3>
          <p>{description}</p>
        </div>
        <div className={classes.item_footer}>
          <Link to={`/cards/${id}`} className={classes.link}>
            <span>Подробнее</span>
          </Link>
        </div>
      </div>
    </div>
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

{
  /* <div>
       <Link to={`/cards/${id}`}> 
        <h3>Карточка: {id}</h3>
         <img src={img} alt={title} />
        <h1>{ttlie}</h1>
        <h2>{description}</h2>
        <p>{story}</p>
         </Link> 
      </article> */
}

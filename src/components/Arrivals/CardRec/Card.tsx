import { Link } from "react-router-dom";
import classes from "./Card.module.css";
//import classes from "../Links/Links.module.css";
import { FC } from "react";
import strelkaImg from "../../../img/icon/strelka.png";
//import KolnDom from "../../../img/card/09-koelner-dom-f-84153835-jpg--63601-.jpg";

import KolnDom from "../../../img/card/KPML_029_Koelner-Dom-sepia-web-wz.jpg";

interface Props {
  title: string;
  description?: string;
  story?: string;
  img?: string;
  id?: string;
}
// { title, description, story, img, id }
export const Card: FC<Props> = ({ title, description, story, img, id }) => {
  return (
    <div className={classes.card}>
      <a className={classes.card__link} href={`/cards/${id}`}></a>
      <img className={classes.card__img} src={KolnDom} alt="Post" />
      <div className={classes.card__body}>
        <div className={classes.card__text}>
          <div className={classes.card__title}>{title}</div>
          <div className={classes.card__desc}>{description}</div>
        </div>

        <img className={classes.card__icon} src={strelkaImg} alt="Open" />
      </div>
    </div>
  );
};

{
  /* <div className={classes.item_icon + " " + classes.group}></div>
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
</div> */
}

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

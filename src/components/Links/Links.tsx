import { Link } from "react-router-dom";
//import classes from "./Links.module.css";

export const Links = () => {
  return (
    <>
      <Link to={`/cards`}>Карточки</Link>
      ....
      <Link to={`/form`}>Форма</Link>
    </>
  );
};

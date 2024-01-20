import classes from "./Header.module.css";
import logoImg from "../../img/icon/koelner-dom-mousepad.jpg";
import { Link } from "react-router-dom";
import { CustomLink } from "../App/CustomLink";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__row}>
          <Link to={"/"} className={classes.header__logo}>
            <img src={logoImg} alt="Logo" />
            <span>Жизнь в Германии</span>
          </Link>
          <nav className={classes.header__nav}>
            <ul>
              <li>
                {/* <Link to={`/cards`} className={classes.link}>    Статьи
                </Link> */}
                <a href={`/cards`}>Статьи</a>
              </li>
              <li>
                <a href={`/form`}>Новая статья</a>
              </li>
              <li>
                <a href={"/login"} className={classes.header__nav__btn}>
                  Войти
                </a>
              </li>
            </ul>
            {/* <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/type">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

<header></header>;

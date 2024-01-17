import classes from "./Header.module.css";
import logoImg from "../../img/icon/koelner-dom-mousepad.jpg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__row}>
          <div className={classes.header__logo}>
            <img src={logoImg} alt="Logo" />
            <span>Жизнь в Германии</span>
          </div>
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
                <a className={classes.header__nav__btn} href={`/form`}>
                  Войти
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

import classes from "./Footer.module.css";
import logoImg from "../../img/icon/koelner-dom-mousepad.jpg";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footer__row}>
          <nav className={classes.footer__nav}>
            <ul>
              <li>
                <a className={classes.footer__nav__btn} href={`/examenA1`}>
                  Подготовка к экзамену А1
                </a>
              </li>
              <li>
                {/* <Link to={`/cards`} className={classes.link}>    Статьи
                </Link> */}
                <a href={`/about`}>О нас</a>
              </li>
              <li>
                <a href={`/contacts`}>Контакты</a>
              </li>
            </ul>
          </nav>
          <div className={classes.footer__logo}>
            <img src={logoImg} alt="Logo" />
            <span> &copy; Avebela</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

{
  /* <footer className="container">&copy; Nika</footer> */
}

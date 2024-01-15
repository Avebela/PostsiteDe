//import { Link } from "react_router_dom";
import classes from "./Links.module.css";

export const Links = () => {
  return (
    <div>
      <div className={classes.post_wrap}>
        <div className={classes.post_item}>
          <div className={classes.item_content}>
            <div className={classes.item_icon + " " + classes.group}></div>
            <div className={classes.item_body}>
              <h3>Мероприятия</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat a quam non blandit.
              </p>
            </div>
            <div className={classes.item_footer}>
              <a href="#" className={classes.link}>
                <span>Подробнее</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.post_item}>
          <div className={classes.item_content}>
            <div className={classes.item_icon + " " + classes.tree}></div>
            <div className={classes.item_body}>
              <h3>Отдых на природе</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat a quam non blandit.
              </p>
            </div>
            <div className={classes.item_footer}>
              <a href="#" className={classes.link}>
                <span>Подробнее</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.post_item}>
          <div className={classes.item_content}>
            <div className={classes.item_icon + " " + classes.anchor}></div>
            <div className={classes.item_body}>
              <h3>Круизы</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat a quam non blandit.
              </p>
            </div>
            <div className={classes.item_footer}>
              <a href="#" className={classes.link}>
                <span>Подробнее</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.post_item}>
          <div className={classes.item_content}>
            <div className={classes.item_icon + " " + classes.video}></div>
            <div className={classes.item_body}>
              <h3>Видеосъемка</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat a quam non blandit.
              </p>
            </div>
            <div className={classes.item_footer}>
              <a href="#" className={classes.link}>
                <span>Подробнее</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.post_item}>
          <div className={classes.item_content}>
            <div className={classes.item_icon + " " + classes.photo}></div>
            <div className={classes.item_body}>
              <h3>Фотография</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat a quam non blandit.
              </p>
            </div>
            <div className={classes.item_footer}>
              <a href="#" className={classes.link}>
                <span>Подробнее</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.post_item}>
          <div className={classes.item_content}>
            <div className={classes.item_icon + " " + classes.gift}></div>
            <div className={classes.item_body}>
              <h3>Подарки</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat a quam non blandit.
              </p>
            </div>
            <div className={classes.item_footer}>
              <a href="#" className={classes.link}>
                <span>Подробнее</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* // <div id={a}></div>текст<div id={b}>текст2</div>
      // <Link to={`/cards`}>Карточки</Link>
      // .... // <Link to={`/form`}>Форма</Link> */
}

import { Link } from "react-router-dom";
import classes from "./Links.module.css";

export const Links = () => {
  return (
    <>
      <div className={classes.post_wrap}>
        <div className={classes.post-item">
          <div className={classes.post-item-wrap">
            <a href="" className={classes.post-link">
              <img src="https://html5book.ru/wp-content/uploads/2017/06/blue-image-3.jpg" />
              <div className={classes.post-info">
                <div className={classes.post-meta">
                  <div className={classes.post-date">Декабрь 18, 2018</div>
                  <div className={classes.post-cat">Красивые вещи</div>
                </div>
                <h3 className={classes.post-title">Уютные вещи для вашего дома</h3>
              </div>
            </a>
          </div>
        </div>

        <div className={classes.post-item">
          <div className={classes.post-item-wrap">
            <a href="" className={classes.post-link">
              <img src="https://html5book.ru/wp-content/uploads/2017/06/blue-image-1.jpg" />
              <div className={classes.post-info">
                <div className={classes.post-meta">
                  <div className={classes.post-date">Декабрь 18, 2018</div>
                  <div className={classes.post-cat}>Красивые вещи</div>
                </div>
                <h3 className={classes.post-title}>Уютные вещи для вашего дома</h3>
              </div>
            </a>
          </div>
        </div>

        <div className={classes.post-item}>
          <div className={classes.post-item-wrap}>
            <a href="" className={classes.post-link}>
              <img src="https://html5book.ru/wp-content/uploads/2017/06/blue-image-2.jpg" />
              <div className={classes.post-info}>
                <div className={classes.post-meta}>
                  <div className={classes.post-date}>Декабрь 18, 2018</div>
                  <div className={classes.post-cat}>Красивые вещи</div>
                </div>
                <h3 className={classes.post-title}>Уютные вещи для вашего дома</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      // <div id="a"></div>текст<div id="b">текст2</div>
      // <Link to={`/cards`}>Карточки</Link>
      // .... // <Link to={`/form`}>Форма</Link>
    </>
  );
};

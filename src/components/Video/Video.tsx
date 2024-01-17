import classes from "./Video.module.css";

import videoImg from "../../img/video/koeln.jpg";

export const Video = () => {
  return (
    <section className={classes.video}>
      <div className="container">
        <div className={classes.video__content}>
          <div className={classes.video__img}>
            <img src={videoImg} alt="Dom" />
          </div>
          <div className={classes.video__text}>
            <div className={classes.video__title}>
              <span className={classes.highlight}>
                <span>Посмотрим</span>
              </span>
              - видео?
            </div>
            <div className={classes.video__desc}>
              узнаем страну из первых уст
            </div>
            <div className={classes.video__btn__wrapper}>
              <a href={`/cards`} className={classes.video__btn}>
                поехали!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import classes from "./Video.module.css";

import videoImg from "../../img/video/koeln.jpg";

export const Video = () => {
  // const showVideo = () => {
  //   return (
  //     <iframe
  //       width="560"
  //       height="315"
  //       src="https://www.youtube.com/embed/CMTa-wA-a3Q?si=wvTD_gIf_UvmsBmt"
  //       title="YouTube video player"
  //       // frameborder="0"
  //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //       // allowfullscreen
  //     ></iframe>
  //   );
  // };
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
              <a href={`/video`} className={classes.video__btn}>
                смотреть
              </a>
              {/* <button
                // onClick={() => showVideo()}
                className={classes.video__btn}
              >
                смотреть
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

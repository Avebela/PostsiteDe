import React from "react";
import classes from "./ShowVideo.module.css";

export const ShowVideo = () => {
  return (
    <div className={classes.show}>
      <div className="container">
        <iframe
          width="1200px"
          height="600px"
          src="https://www.youtube.com/embed/CMTa-wA-a3Q?si=wvTD_gIf_UvmsBmt"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

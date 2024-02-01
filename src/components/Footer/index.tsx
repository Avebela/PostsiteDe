import React from "react";
import { Layout as AntLayout, Space, Typography } from "antd";
import { Layout } from "../Layout";
import classes from "./index.module.css";

import logoImg from "../../img/icon/koelner-dom-mousepad.jpg";

export const Footer = () => {
  return (
    <div className="container">
      <AntLayout.Footer className={classes.footer}>
        <nav className={classes.footer__nav}>
          <ul>
            <li>
              <a href={`/contacts`}>Контакты</a>
            </li>
            <li>
              <a href={`/about`}>О нас</a>
            </li>
            <li>
              <a href={`/examenA1`}> Подготовка к экзамену А1</a>
            </li>
          </ul>
        </nav>
        <div className={classes.footer__icon}>
          <img src={logoImg} alt="Logo" />
          <span> &copy; Avebela</span>
        </div>
      </AntLayout.Footer>
    </div>
  );
};

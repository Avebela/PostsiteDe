import React from "react";
import { Layout as AntLayout, Space, Typography } from "antd";
import { Layout } from "../../components/Layout";
import classes from "./index.module.css";
import {
  LoginOutlined,
  FormOutlined,
  UserOutlined,
  LikeOutlined,
} from "@ant-design/icons";

import { CustomButton } from "../CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../routers/paths";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
import logoImg from "../../img/icon/koelner-dom-mousepad.jpg";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate(Paths.login);
  };
  return (
    <div className="container">
      <AntLayout.Header className={classes.header}>
        <Space>
          {/* <img src={logoImg} alt="Logo" className={classes.icon} />*/}
          <LikeOutlined className={classes.header__icon} />
          <Link to={Paths.home}>
            <CustomButton type="ghost">
              <Typography.Title level={1}>Жизнь в Германии</Typography.Title>
            </CustomButton>
          </Link>
        </Space>
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
              <a href={`/comment`}>Комментарии</a>
            </li>
          </ul>
        </nav>
        {user ? (
          <CustomButton
            type="ghost"
            icon={<LoginOutlined />}
            onClick={onLogoutClick}
          >
            Выйти
          </CustomButton>
        ) : (
          <Space>
            <Link to={Paths.register}>
              <CustomButton type="ghost" icon={<UserOutlined />}>
                Зарегистрироваться
              </CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton type="ghost" icon={<LoginOutlined />}>
                Войти
              </CustomButton>
            </Link>
          </Space>
        )}
      </AntLayout.Header>
    </div>
  );
};

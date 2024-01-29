import React from "react";
import { Layout, Space, Typography } from "antd";

import classes from "./index.module.css";
import { LoginOutlined, FormOutlined, UserOutlined } from "@ant-design/icons";

import { CustomButton } from "../CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../Routers/paths";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";

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
    <Layout.Header className={classes.header}>
      <Space>
        <FormOutlined className={classes.icon} />
        <Link to={Paths.home}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Комментарии</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
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
    </Layout.Header>
  );
};

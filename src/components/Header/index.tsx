import React from "react";
import { Layout, Space, Typography } from "antd";

import classes from "./index.module.css";
import { LoginOutlined, FormOutlined, UserOutlined } from "@ant-design/icons";

import { CustomButton } from "../CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../Routers/paths";

export const Header = () => {
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
    </Layout.Header>
  );
};

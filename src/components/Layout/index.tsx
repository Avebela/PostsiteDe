import React from "react";
import { Layout as AntLayout } from "antd";

import { Header } from "../Header";

import classes from "./index.module.css";
type Props = {
  children: React.ReactNode;
};
// const Layout: React.FC<Props> = ({children}) => {
export const Layout = ({ children }: Props) => {
  return (
    <div className={classes.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

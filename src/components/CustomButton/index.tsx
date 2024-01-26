import React from "react";
import { Button, Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?:
    | "link"
    | "default"
    | "text"
    | "primary"
    | "dashed"
    | "ghost"
    | undefined;
  danger?: boolean | undefined;
  loading?: boolean | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
  ghost?: boolean | undefined;
};

export const CustomButton = ({
  children,
  htmlType = "button",
  onClick,
  type,
  danger,
  loading,
  shape,
  icon,
  ghost,
}: Props) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        onClick={onClick}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        ghost={ghost}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

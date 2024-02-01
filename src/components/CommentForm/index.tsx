import React from "react";
import { Comment } from "../../services/comment/comment.types";
import { Card, Form, Space } from "antd";
import { CustomInput } from "../../components/CustomInput";
import { ErrorMessage } from "../../components/Error-message";
import { CustomButton } from "../../components/CustomButton";

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  comment?: T;
};

export const CommentForm = ({
  onFinish,
  title,
  btnText,
  error,
  comment,
}: Props<Comment>) => {
  return (
    <Card title={title} style={{ width: "38rem" }}>
      <Form name="comment-form" onFinish={onFinish} initialValues={comment}>
        <label>
          <i> Заголовок</i>
          <CustomInput type="text" name="title" placeholder="Заголовок" />
        </label>
        <label>
          <i> Текст комментария</i>
          <CustomInput
            type="text"
            name="body"
            placeholder="Текст комментария"
          />
        </label>
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};

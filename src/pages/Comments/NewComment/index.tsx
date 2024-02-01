import { Row } from "antd";
import { Layout } from "../../../components/Layout";
import { CommentForm } from "../../../components/CommentForm";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSlice";
import { useAddCommentMutation } from "../../../services/comment/comment.api";
import { Paths } from "../../../routers/paths";
import { Comment } from "../../../services/comment/comment.types";
import { isErrorWithMessage } from "../../../utils/is-error-with-message";

export const NewComment = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [addComment] = useAddCommentMutation();
  useEffect(() => {
    if (!user) {
      navigate(Paths.login);
    }
  }, [navigate, user]);
  const handleAddComment = async (data: Comment) => {
    try {
      await addComment(data).unwrap();
      navigate(`${Paths.status}/created`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);
      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    // <div className="container">
    <Layout>
      <Row align="middle" justify="center">
        <CommentForm
          title="Добавить комментарий"
          btnText="Добавить"
          onFinish={handleAddComment}
          error={error}
        />
      </Row>
    </Layout>
  );
};

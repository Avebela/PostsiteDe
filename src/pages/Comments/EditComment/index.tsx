import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCommentByIdQuery,
  useUpdateCommentMutation,
} from "../../../services/comment/comment.api";
import { Comment } from "../../../services/comment/comment.types";
import { Row } from "antd";
import { Layout } from "../../../components/Layout";
import { isErrorWithMessage } from "../../../utils/is-error-with-message";
import { Paths } from "../../../routers/paths";
import { CommentForm } from "../../../components/CommentForm";
export const EditComment = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetCommentByIdQuery(id || "");
  const [updateComment] = useUpdateCommentMutation();

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  const handleEditComment = async (comment: Comment) => {
    try {
      const updatedComment = {
        ...data,
        ...comment,
      };
      await updateComment(updatedComment);
      navigate(`${Paths.status}/updated`);
    } catch (error) {
      const maybeError = isErrorWithMessage(error);
      if (maybeError) {
      }
    }
  };

  return (
    // <div className="container">
    <Layout>
      <Row align="middle" justify="center">
        <CommentForm
          title="Редактировать комментарий"
          btnText="Сохранить изменения"
          error={error}
          comment={data}
          onFinish={handleEditComment}
        />
      </Row>
    </Layout>
  );
};

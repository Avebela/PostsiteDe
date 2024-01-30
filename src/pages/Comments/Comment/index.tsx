import { Descriptions, Divider, Space, Modal } from "antd";
import { selectUser } from "../../../features/auth/authSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import {
  useDeleteCommentMutation,
  useGetCommentByIdQuery,
} from "../../../services/comment/comment.api";
import { Paths } from "../../../components/Routers/paths";
import { Layout } from "../../../components/Layout";
import { CustomButton } from "../../../components/CustomButton";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../../../components/Error-message";
import { isErrorWithMessage } from "../../../utils/is-error-with-message";
export const Comment = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const params = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetCommentByIdQuery(params.id || "");
  const [deleteComment] = useDeleteCommentMutation();
  const user = useSelector(selectUser);
  if (isLoading) {
    return <span>Загрузка</span>;
  }
  if (!data) {
    return <Navigate to={Paths.home} />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };
  const handleDeleteComment = async () => {
    hideModal();
    try {
      await deleteComment(data.id).unwrap();
      navigate(`${Paths.status}/delete`);
    } catch (error) {
      const maybeError = isErrorWithMessage(error);
      if (maybeError) {
        setError(error.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };
  // console.log(user!.id);
  // console.log(data.userId);
  return (
    <Layout>
      <Descriptions title="Просмотр комментария" bordered>
        <Descriptions.Item label="Заголовок" span={3}>
          {data.title}
        </Descriptions.Item>
        <Descriptions.Item label="Комментарий" span={3}>
          {data.body}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === data.userId && (
        <>
          <Divider orientation="left">Действия</Divider>
          <Space>
            <Link to={`/comment/edit/${data.id}`}>
              <CustomButton
                shape="round"
                type="default"
                icon={<EditOutlined />}
              >
                Редактировать
              </CustomButton>
            </Link>
            <CustomButton
              shape="round"
              danger
              icon={<EditOutlined />}
              onClick={showModal}
            >
              Удалить
            </CustomButton>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title="Подтвердить удаление"
        open={isModalOpen}
        onOk={handleDeleteComment}
        onCancel={hideModal}
        okText="Подтвердить"
        cancelText="Отменить"
      ></Modal>
    </Layout>
  );
};

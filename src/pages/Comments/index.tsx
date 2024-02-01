import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";

import { CustomButton } from "../../components/CustomButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useGetAllCommentsQuery } from "../../services/comment/comment.api";
import type { ColumnsType } from "antd/es/table";
import { Comment } from "../../services/comment/comment.types";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routers/paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
const columns: ColumnsType<Comment> = [
  {
    title: "Заголовок",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Комментарий",
    dataIndex: "body",
    key: "body",
  },
];

export const Comments = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { data, isLoading } = useGetAllCommentsQuery();

  useEffect(() => {
    if (!user) {
      navigate(Paths.login);
    }
  }, [navigate, user]);

  const goToAddUser = () => navigate(Paths.commentNew);

  return (
    // <div className="container">
    <Layout>
      <CustomButton
        type="primary"
        onClick={goToAddUser}
        icon={<PlusCircleOutlined />}
      >
        Добавить
      </CustomButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.comment}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};

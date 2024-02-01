import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/Layout";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { PasswordInput } from "../../components/PasswordInput";
import { Paths } from "../../routers/paths";
import { Link, useNavigate } from "react-router-dom";
import { UserData, useLoginMutation } from "../../services/auth/auth.api";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/Error-message";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useState } from "react";
import { useRegisterMutation } from "../../services/auth/auth.api";
import { User } from "../../services/user/user.types";

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [redisterUser] = useRegisterMutation();
  const [error, setError] = useState("");
  const register = async (data: RegisterData) => {
    try {
      await redisterUser(data).unwrap();

      navigate(Paths.home);
    } catch (error) {
      const maybeError = isErrorWithMessage(error);
      if (maybeError) {
        setError(error.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };
  return (
    // <div className="container">
    <Layout>
      <Row align="middle" justify="center">
        <Card
          title="Зарегистрируйтесь"
          style={{
            width: "30rem",
          }}
        >
          <Form onFinish={register}>
            <CustomInput name="name" placeholder="Имя" />

            <CustomInput name="email" placeholder="Email" type="email" />

            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton htmlType="submit" type="primary">
              Сохранить
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированы?
              <Link to={Paths.login}> Войдите</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

import { useState } from "react";
import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/Layout";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { PasswordInput } from "../../components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../components/Routers/paths";
import { UserData, useLoginMutation } from "../../services/auth/auth.api";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/Error-message";
export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");
  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      // navigate("/c");
      navigate(Paths.home);
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
    <Layout>
      <Row align="middle" justify="center">
        <Card
          title="Войдите"
          style={{
            width: "30rem",
          }}
        >
          <Form onFinish={login}>
            <CustomInput name="email" placeholder="Email" type="email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton htmlType="submit" type="primary">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта?
              <Link to={Paths.register}> Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

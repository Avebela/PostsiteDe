import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/Layout";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { PasswordInput } from "../../components/PasswordInput";
import { Link } from "react-router-dom";
import { Paths } from "../../components/Routers/paths";
export const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card
          title="Войдите"
          style={{
            width: "30rem",
          }}
        >
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

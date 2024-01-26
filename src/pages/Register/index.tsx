import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/Layout";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { PasswordInput } from "../../components/PasswordInput";
import { Link } from "react-router-dom";
import { Paths } from "../../components/Routers/paths";
export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card
          title="Зарегистрируйтесь"
          style={{
            width: "30rem",
          }}
        >
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

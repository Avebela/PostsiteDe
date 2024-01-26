import { Input, Form } from "antd";
import { NamePath } from "antd/es/form/interface";

type Props = {
  dependencies?: NamePath[];
  name: string;
  placeholder: string;
};

export const PasswordInput = ({ name, placeholder, dependencies }: Props) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        { message: "Обязательное поле", required: true },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }
            if (name === "confirmPassword") {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли должны совпадать"));
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error("Пароль должен содержать большое 6 символов")
                );
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};

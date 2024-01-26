import { Input, Form } from "antd";

type Props = {
  type?: string;

  name: string;
  placeholder: string;
};

export const CustomInput = ({
  name,
  placeholder,

  type = "text",
}: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

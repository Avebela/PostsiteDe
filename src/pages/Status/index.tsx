import { Row, Result, Button } from "antd";
import { Layout } from "../../components/Layout";
import { Link, useParams } from "react-router-dom";
import { Paths } from "../../routers/paths";
const Statuses: Record<string, string> = {
  created: "Комментарий успешно создан",
  updated: "Комментарий успешно изменен",
  deleted: "Комментарий успешно удален",
};
export const Status = () => {
  const { status } = useParams();
  return (
    // <div className="container">
    <Layout>
      <Row align="middle" justify="center" style={{ width: "100%" }}>
        <Result
          status={status ? "success" : 404}
          title={status ? Statuses[status] : "Не найдено"}
          extra={
            <Button key="dashboard">
              <Link to={Paths.comments}>
                Вернуться к списку всех комментариев
              </Link>
            </Button>
          }
        />
      </Row>
    </Layout>
  );
};

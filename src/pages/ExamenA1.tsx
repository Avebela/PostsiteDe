import { Layout } from "../components/Layout";
const ExamenA1 = () => {
  return (
    // <div className="container">
    <Layout>
      <h1>
        Хотите в коротокие сроки подготовиться и успешно сдать экзамент А1?{" "}
      </h1>
      <article>
        Вы можете перейти на сайт по подготовке к международному экзамену по
        немецкому языку А1
      </article>
      <div>
        <a href={`/video`}>перейти на сайт</a>
      </div>
    </Layout>
  );
};

export { ExamenA1 };

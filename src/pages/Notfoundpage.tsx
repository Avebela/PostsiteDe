import { Link } from "react-router-dom";
import { Paths } from "../routers/paths";
import { Layout } from "../components/Layout";

const Notfoundpage = () => {
  return (
    // <div className="container">
    <Layout>
      This page doesn't exist. Go <Link to={Paths.home}>home</Link>
    </Layout>
  );
};

export { Notfoundpage };

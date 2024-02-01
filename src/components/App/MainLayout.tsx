import { Outlet } from "react-router-dom";
// import { Header } from "../Header/Header";
import { Footer } from "../Footer";
import { Header } from "../Header";
const MainLayout = () => {
  return (
    <>
      <Header />
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      <Footer />
    </>
  );
};

export { MainLayout };

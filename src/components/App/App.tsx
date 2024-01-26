import { Routers } from "../Routers/Routers";
import classes from "./App.module.css";

import { AuthProvider } from "../../hoc/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "../Routers/paths";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { ConfigProvider, theme } from "antd";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Home</h1>,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

export const App = () => {
  return (
    // <AuthProvider>
    // <Routers />
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <RouterProvider router={router} />
    </ConfigProvider>
    // </AuthProvider>
  );
};

{
  /* <Route path="type" element={<Blogpage />} />
    <Route path="type/:id" element={<Singlepage />} />
    <Route path="type/:id/edit" element={<Editpost />} /> */
}
{
  /* <Route
      path="type/new"
      element={
        <RequireAuth>
          <Createpost />
        </RequireAuth>
      }
    /> */
}

{
  /* <Link to={`/cards`} className={classes.link}>
     
        <h1>Leben in Russland und in Deutschland</h1>
      </Link> */
}

{
  /* <a className="link" href={`/cards`}>
          Каталог товаров
        </a> */
}

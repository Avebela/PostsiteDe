import { Routers } from "../Routers/Routers";
import classes from "./App.module.css";

import { AuthProvider } from "../../hoc/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "../Routers/paths";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Comments } from "../../pages/Comments";
import { ConfigProvider, theme } from "antd";
import { Auth } from "../../features/auth/auth";
import { NewComment } from "../../pages/Comments/NewComment";

import { Comment } from "../../pages/Comments/Comment";
import { Status } from "../../pages/Status";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Comments />,
  },
  {
    path: Paths.comments,
    element: <Comments />,
  },
  {
    path: `${Paths.comment}/:id`,
    element: <Comment />,
  },
  {
    path: Paths.commentNew,
    element: <NewComment />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: `${Paths.status}/:status`,
    element: <Status />,
  },
]);

export const App = () => {
  return (
    // <AuthProvider>
    // <Routers />
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
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

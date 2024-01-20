import { Routers } from "../Routers/Routers";
import classes from "./App.module.css";

import { AuthProvider } from "../../hoc/AuthProvider";

export const App = () => {
  return (
    // <AuthProvider>
    <Routers />
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

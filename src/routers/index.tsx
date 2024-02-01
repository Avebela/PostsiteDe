import { Routes, Route, Navigate } from "react-router-dom";

import { Cards } from "../components/Cards/Cards";
import { Form } from "../components/Form/Form";
import { FullCard } from "../components/FullCard/FullCard";

// import { EditForm } from "../Form/EditForm";
import { ExamenA1 } from "../pages/ExamenA1";

import { ShowVideo } from "../components/Video/ShowVideo/ShowVideo";
import { Contacts } from "../pages/Contacts";
import { Createpost } from "../pages/Createpost";
import { Homepage } from "../pages/Homepage";
import { About } from "../pages/Aboutpage";
import { Blogpage } from "../pages/Blogpage";
import { Notfoundpage } from "../pages/Notfoundpage";
import { MainLayout } from "../components/App/MainLayout";
import { Loginpage } from "../pages/Login/Loginpage";

import classes from "./App.module.css";

import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Comments } from "../pages/Comments";

import { NewComment } from "../pages/Comments/NewComment";
import { EditComment } from "../pages/Comments/EditComment";
import { Comment } from "../pages/Comments/Comment";
import { Status } from "../pages/Status";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: Paths.home,
        element: <Homepage />,
      },
      {
        path: Paths.about,
        element: <About />,
      },
      {
        path: Paths.contacts,
        element: <Contacts />,
      },

      {
        path: Paths.examenA1,
        element: <ExamenA1 />,
      },

      {
        path: Paths.cards,
        element: <Cards />,
      },

      {
        path: Paths.form,
        element: <Form />,
      },

      {
        path: `${Paths.cards}/:id`,
        element: <FullCard />,
      },

      {
        path: Paths.video,
        element: <ShowVideo />,
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
        path: `${Paths.commentEdit}/:id`,
        element: <EditComment />,
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
      { path: "*", element: <Notfoundpage /> },
    ],
  },
]);

// https://stackoverflow.com/questions/74168742/how-to-template-jsx-with-createbrowserrouter
// { index: true, element: <Home /> },
{
  /* <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="about" element={<About />} />
    <Route path="about us" element={<Navigate to="/about" replace />} />
    <Route path="login" element={<Loginpage />} />

    src/pages/Contacts.tsx
    <Route path="contacts" element={<Contacts />} />
    <Route path="examenA1" element={<ExamenA1 />} />
    <Route path="cards" element={<Cards />} />
    <Route path="form" element={<Form />} />
    <Route
      path="type/new"
      element={
        // <RequireAuth></RequireAuth>
        <Createpost />
      }
    />
    <Route path="cards/:id" element={<FullCard />} />
    <Route path="video" element={<ShowVideo />} />
    <Route path="*" element={<Notfoundpage />} />
  </Route>
</Routes>; */
}

{
  /* <Route path="/" element={<App />} /> */
}

{
  /* // <Route path="cards/:id/editform" element={<EditForm />} /> */
}

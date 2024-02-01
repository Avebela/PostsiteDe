import { Routes, Route, Navigate } from "react-router-dom";

import { Cards } from "../components/Cards/Cards";
import { Form } from "../components/Form/Form";
import { FullCard } from "../components/FullCard/FullCard";

//import { EditForm } from "../Form/EditForm";
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
import { RequireAuth } from "../hoc/RequireAuth";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="about us" element={<Navigate to="/about" replace />} />
        <Route path="login" element={<Loginpage />} />
        {/* <Route path="/" element={<App />} /> */}
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

      {/* // <Route path="cards/:id/editform" element={<EditForm />} /> */}
    </Routes>
  );
};

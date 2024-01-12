import { Route, Routes } from "react-router-dom";
import { Cards } from "../Cards/Cards";
import { Form } from "../Form/Form";
import { FullCard } from "../FullCard/FullCard";
//import { EditForm } from "../Form/EditForm";

export const Routers = () => {
  return (
    <Routes>
      <Route path="cards" element={<Cards />} />
      <Route path="form" element={<Form />} />
      <Route path="cards/:id" element={<FullCard />} />
      {/* // <Route path="cards/:id/editform" element={<EditForm />} /> */}
    </Routes>
  );
};

import { RouterProvider } from "react-router-dom";

import { Auth } from "../../features/auth/auth";

import { router } from "../../routers";

export const App = () => {
  return (
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  );
};

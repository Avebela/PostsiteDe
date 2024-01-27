import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "./services/cards/cards.api";
import { setupListeners } from "@reduxjs/toolkit/query";

import "./styles/reset.css";
// import "./styles/common.css";
import "./main.css";
import authSlice from "./features/auth/authSlice";
import { userApi } from "./services/user/user.api";
import { ListenerMiddleware } from "./middleware/auth";

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,

    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([cardsApi.middleware, userApi.middleware])
      .prepend(ListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

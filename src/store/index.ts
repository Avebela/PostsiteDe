import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "../services/cards/cards.api";
import { setupListeners } from "@reduxjs/toolkit/query";

import authSlice from "../features/auth/authSlice";
import { userApi } from "../services/user/user.api";
import { ListenerMiddleware } from "../middleware/auth";
import commentSlice from "../features/comment/commentSlice";
export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    authSlice,
    commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([cardsApi.middleware, userApi.middleware])
      .prepend(ListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

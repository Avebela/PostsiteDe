import { User } from "../../services/user/user.types";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth/auth.api";
import { RootState } from "./../../main";

interface InitialState {
  user: (User & { token: string }) | null;
  isAuth: boolean;
}

const initialState: InitialState = {
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
      })
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isAuth = true;
        }
      )
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
export const selectIsAuth = (state: RootState) => state.authSlice.isAuth;
export const selectUser = (state: RootState) => state.authSlice.user;

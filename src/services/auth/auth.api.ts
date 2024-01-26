import { User } from "../user/user.types";
import { userApi } from "../user/user.api";

export type userData = Omit<User, "id">;

type ResponseLoginData = User & { token: string };

export const authApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginData, userData>({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<ResponseLoginData, userData>({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: "/user/current",
        method: "get",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } =
  authApi;
export const {
  endpoints: { login, register, current },
} = authApi;

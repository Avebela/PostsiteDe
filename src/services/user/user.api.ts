import { RootState } from "./../../main";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { User } from "./user.types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).authSlice.user?.token ||
      localStorage.getItem("token");
    if (token && token !== null) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Card {
  id: string;
  title: string;
  description: string;
  img: string;
  story: string;
}

type CardsResponse = Card[];

type NewCard = {
  title: string;
  description: string;
  img: string;
  story: string;
  _id?: string;
};

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Cards"],

  // refetchOnFocus: true,
  endpoints: (builder) => ({
    getCards: builder.query<CardsResponse, void>({
      query: () => ({
        url: "/cards",
        method: "GET",
      }),
      providesTags: ["Cards"],
    }),
    addCard: builder.mutation<Card, NewCard>({
      query: (body) => ({
        url: "/cards",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Cards"],
    }),

    updateCard: builder.mutation({
      query: (body) => ({
        url: "/cards",
        method: "PUT",
        body,
      }),

      invalidatesTags: ["Cards"],
    }),
    getCardById: builder.query({
      query: (id) => ({
        url: `/cards/${id}`,
      }),
      providesTags: ["Cards"],
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/cards/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Cards"],
    }),
  }),
  //refetchOnFocus: true,
  // refetchOnMountOrArgChange: 60,
});

export const {
  useGetCardsQuery,
  useAddCardMutation,
  useLazyGetCardsQuery,
  useGetCardByIdQuery,
  useDeleteCardMutation,
  useUpdateCardMutation,
  usePrefetch,
} = cardsApi;

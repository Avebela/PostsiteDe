import { Comment, CommentsResponse, NewComment } from "./comment.types";
import { User } from "../user/user.types";
import { userApi } from "../user/user.api";

export type CommentData = Omit<Comment, "id">;

export const commentApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query<CommentsResponse, void>({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
      // providesTags: ["Comment"],
    }),

    addComment: builder.mutation<Comment, NewComment>({
      query: (body) => ({
        url: "/comment",
        method: "POST",
        body,
      }),
      // invalidatesTags: ["Cards"],
    }),

    updateComment: builder.mutation<string, Comment>({
      query: (body) => ({
        url: "/comment",
        method: "PUT",
        body,
      }),

      //   invalidatesTags: ["Comment"],
    }),
    getCommentById: builder.query<Comment, string>({
      query: (id) => ({
        url: `/comment/${id}`,
        method: "GET",
      }),
      // providesTags: ["Comment"],
    }),
    deleteComment: builder.mutation<string, string>({
      query: (id) => ({
        url: `/comment`,
        method: "DELETE",
        body: { id },
      }),

      // invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetCommentByIdQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;

export const {
  endpoints: {
    getAllComments,
    getCommentById,
    addComment,
    updateComment,
    deleteComment,
  },
} = commentApi;

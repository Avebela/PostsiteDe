import { createSlice } from "@reduxjs/toolkit";
import { commentApi } from "../../services/comment/comment.api";
import { RootState } from "../../main";
import { CommentsResponse } from "../../services/comment/comment.types";

interface InitialState {
  comment: CommentsResponse | null;
}

const initialState: InitialState = {
  comment: null,
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: { logout: () => initialState },
  extraReducers: (builder) => {
    builder.addMatcher(
      commentApi.endpoints.getAllComments.matchFulfilled,
      (state, action) => {
        state.comment = action.payload;
      }
    );
  },
});

export const { logout } = commentSlice.actions;
export default commentSlice.reducer;
export const selectComment = (state: RootState) => state.commentSlice;

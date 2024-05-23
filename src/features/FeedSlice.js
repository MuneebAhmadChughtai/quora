import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const FeedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    newPost: (state, action) => {
      state.push(action.payload);
    },

    updatePost: (state, action) => {
      state.forEach((post) => {
        if (post.id === action.payload.id) {
          post.questionText = action.payload.questionText;
        }
      });
    },

    deletePost: (state, action) => {
      state.filter((post) => action.payload.id !== post.id);
    },

    insertAnswer: (state, action) => {
      state.forEach((post) => {
        if (post.id === action.payload.id) {
          if (!post.answers) {
            post.answers = [action.payload.ans];
          } else {
            post.answers.push(action.payload.ans);
          }
        }
      });
    },
  },
});

export const { newPost, getPosts, updatePost, deletePost, insertAnswer } =
  FeedSlice.actions;
export default FeedSlice.reducer;

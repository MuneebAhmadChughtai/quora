import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  answers:[],
  ans :{
    ansId: null,
  ansText: null,
  postedBy: null,
  }
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    answers: (state, action) => {
      state.answers.push(action.payload);
    },
    currentAnswer: (state, action) => {
      console.log("current answer",action.payload.ansid)
      state.ans = action.payload;
    },
    updateAnswer: (state, action) => {
      state.ans = action.payload.ansText }
    },
  },
);

export const { answers, currentAnswer } = answerSlice.actions;
export const selectAnswer = (state) => state.answer;
export default answerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  questionText: "",
  linkText: "",
  postedBy: "",
  answers: "",
};

export const questionSlice = createSlice({
  name: "question",
  initialState,

  reducers: {
    currentQuestion: (state, action) => {
      console.log(action.payload);
      state.id = action.payload.id;
      state.questionText = action.payload.questionText;
      state.linkText = action.payload.linkText;
      state.postedBy = action.payload.postedBy;
      state.answers = action.payload.answers;
    },
  },
});

export const { currentQuestion } = questionSlice.actions;
export const selectQuestion = (state) => state.question;
export default questionSlice.reducer;

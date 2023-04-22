import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languageSelect: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateLanguage: (state, action) => {
      state.languageSelect = action.payload;
    },
  },
});

export const { updateLanguage } = counterSlice.actions;
export default counterSlice.reducer;

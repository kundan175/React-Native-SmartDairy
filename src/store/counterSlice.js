import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languageSelect: "",
  alertVisible: false,
  alertTitle: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateLanguage: (state, action) => {
      state.languageSelect = action.payload;
    },
    alertShowNow: (state, action) => {
      state.alertVisible = true;
      state.alertTitle = action.payload.title;
    },
    alertHideNow: (state, action) => {
      state.alertVisible = false;
      state.alertTitle = "";
    },
  },
});

export const { updateLanguage, alertShowNow, alertHideNow } =
  counterSlice.actions;
export default counterSlice.reducer;

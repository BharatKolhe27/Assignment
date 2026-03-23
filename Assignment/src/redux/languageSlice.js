import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: "en",
  reducers: {
    toggleLanguage: (state) => (state === "en" ? "fr" : "en"),
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
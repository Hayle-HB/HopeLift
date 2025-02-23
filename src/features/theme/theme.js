import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false, // true for light, false for dark
  systemPreference: false, // whether to use system preference
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode;
      state.systemPreference = false;
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      state.systemPreference = false;
    },
    setSystemPreference: (state, action) => {
      state.systemPreference = action.payload;
      if (action.payload) {
        // If system preference is enabled, set theme based on system
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        state.mode = !prefersDark;
      }
    },
  },
});

// Export actions
export const { toggleTheme, setTheme, setSystemPreference } =
  themeSlice.actions;

// Export selectors
export const selectTheme = (state) => state.theme.mode;
export const selectSystemPreference = (state) => state.theme.systemPreference;

export default themeSlice.reducer;

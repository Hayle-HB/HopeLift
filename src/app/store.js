import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Add other reducers here
  },
});

export default store;

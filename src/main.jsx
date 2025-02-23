import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/theme";
import "./index.css";
import App from "./App.jsx";

// Create Redux store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

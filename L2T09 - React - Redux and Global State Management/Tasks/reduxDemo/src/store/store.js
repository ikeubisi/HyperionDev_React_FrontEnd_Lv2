//store.js
import { configureStore } from "@reduxjs/toolkit";
import counterState from "./counterState";
import.meta.env;

const store = configureStore({
  reducer: {
    counter: counterState,
    // ...more reducers can be added here.
  },
  // other store option
  middleware: [],
  devTools: import.meta.env.NODE_ENV !== "production",
});
export default store;

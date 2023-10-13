import { configureStore } from "@reduxjs/toolkit";
// Where out actions live eg ADD, DELETE
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

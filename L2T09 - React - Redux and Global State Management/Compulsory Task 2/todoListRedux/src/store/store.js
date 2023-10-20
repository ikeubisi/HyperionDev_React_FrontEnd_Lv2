import { configureStore } from "@reduxjs/toolkit";
// Where out actions live eg ADD, DELETE
import todoReducer from "./reducers/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

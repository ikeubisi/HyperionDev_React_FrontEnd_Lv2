// Todo List creation learned from
// React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

import { createSlice } from "@reduxjs/toolkit";

// Create new id for keys learned from
// Stop using the UUID Library in JavaScript (2022) YouTube.
// Available at: https://www.youtube.com/watch?v=cutfiIgyRao (Accessed: 13 October 2023).
let todoId = crypto.randomUUID();

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, content: "Content1", completed: true },
    { id: 2, content: "Content1", completed: false },
    { id: 3, content: "Content2", completed: false },
  ],
  // CRUD functionality
  reducers: {
    // ADD Todo
    addTodo: (state, action) => {
      const newTodo = {
        id: todoId,
        content: action.payload.content,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

// store.js needs this
export default todoSlice.reducer;

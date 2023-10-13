// Todo List creation learned from
// React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialTodoState: [
    { id: 1, content: "Content1", completed: false },
    { id: 2, content: "Content2", completed: false },
  ],
  // CRUD functionality
  reducers: {
    // ADD Todo
    addTodo: (state, action) => {
      const newTodo = {
        // Create new id for keys learned from
        // Stop using the UUID Library in JavaScript (2022) YouTube.
        // Available at: https://www.youtube.com/watch?v=cutfiIgyRao (Accessed: 13 October 2023).
        id: crypto.randomUUID(),
        content: action.payload.content,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

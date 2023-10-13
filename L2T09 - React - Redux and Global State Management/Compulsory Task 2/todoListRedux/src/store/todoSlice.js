// Todo List creation learned from
// React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

import { createSlice } from "@reduxjs/toolkit";

// Create unique id for keys & targeting todos for editing learned from
// Stop using the UUID Library in JavaScript (2022) YouTube.
// Available at: https://www.youtube.com/watch?v=cutfiIgyRao (Accessed: 13 October 2023).
let todoId = crypto.randomUUID();

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, content: "Content1", completed: true },
    { id: 2, content: "Content2", completed: false },
    { id: 3, content: "Content3", completed: false },
    { id: 4, content: "Content4", completed: false },
    { id: 5, content: "Content5", completed: false },
    { id: 6, content: "Content6", completed: false },
    { id: 7, content: "Content7", completed: false },
    { id: 8, content: "Content8", completed: false },
    { id: 9, content: "Content9", completed: false },
    { id: 10, content: "Content10", completed: false },
    { id: 11, content: "Content11", completed: false },
  ],

  // Add, Edit, Delete, Completed toggle
  reducers: {
    // Add Todo
    addTodo: (state, action) => {
      const newTodo = {
        id: todoId,
        content: action.payload.content,
        completed: false,
      };
      state.push(newTodo);
    },
    // Completed Toggle Todo
    toggleComplete: (state, action) => {
      // Find id of Todo to target
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      // Get todo at specific position
      state[index].completed = action.payload.completed;
    },
    // Delete Todo
    deleteTodo: (state, action) => {
      // Use filter function to remove only todo from array that we have chosen to delete
      // filter function will return us a new array
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// Export actions so out buttons can use them
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

// store.js needs this
export default todoSlice.reducer;

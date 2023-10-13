// Todo List creation learned from
// React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", content: "Content1", completed: true },
    { id: "2", content: "Content2", completed: false },
    { id: "3", content: "Content3", completed: false },
  ],

  // Add, Edit, Delete, Completed toggle
  reducers: {
    // Add Todo
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
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
    // Edit Todo
    editTodo: (state, action) => {
      // Find id of Todo to target
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      // Get todo at specific position
      state[index].content = action.payload.content;
    },
  },
});

// Export actions so out buttons can use them
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

// store.js needs this
export default todoSlice.reducer;

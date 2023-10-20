import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", content: "Content1", completed: true },
    { id: "2", content: "Content2", completed: false },
    { id: "3", content: "Content3", completed: false },
  ],

  // Todo List creation Add, Delete and Completed learned from
  // React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
  // Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

  // Add Todo, Delete Todo, Edit Todo & Toggle Complete
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        content: action.payload.content,
        completed: false,
      };
      return [...state, newTodo];
    },

    // Delete Todo
    deleteTodo: (state, action) => {
      // Use filter function to remove only todo from array that we have chosen to delete
      // filter function will return us a new array
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    // Todo item Edit learned from
    // Redux crud tutorial in react - redux toolkit tutorial (2022) YouTube.
    // Available at: https://youtu.be/bml92jhF4t8?feature=shared&amp;t=2370 (Accessed: 13 October 2023).

    // Edit Todo (would deal with PUT rather than PATCH requests in a real site)
    editTodo: (state, action) => {
      state.forEach((todo) => {
        // Find unique id of Todo to target
        if (todo.id === action.payload.id) {
          // Change the content in todo (state gets mutated)
          todo.content = action.payload.content;
        }
      });
    },

    // Completed Toggle Todo
    toggleComplete: (state, action) => {
      // Find id of Todo to target
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      // Get todo at specific position
      state[index].completed = action.payload.completed;
    },
  },
});

// Export actions so out buttons can use them
export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  todoSlice.actions;

// store.js needs this
export default todoSlice.reducer;

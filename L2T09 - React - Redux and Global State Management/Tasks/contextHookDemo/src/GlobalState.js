export const initialState = {
  count: 0,
};
// If the state parameter is not provided (i.e., it is undefined),
// it will default to the initialState object
// This means that when the reducer is initially called,
// it will use the initial state as the starting state.
export const reducers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  // If no action type matches, return the current state
  return state;
};

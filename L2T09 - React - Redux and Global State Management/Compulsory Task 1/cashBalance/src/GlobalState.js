export const initialState = {
  balance: 0,
};
export const reducers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, balance: state.balance + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, balance: state.balance - 1 };
  }
  // If no action type matches, return the current state
  return state;
};

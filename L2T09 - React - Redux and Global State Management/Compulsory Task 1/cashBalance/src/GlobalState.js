export const initialState = {
  balance: 1000,
};
export const reducers = (state = initialState, action) => {
  if (action.type === "DEPOSIT") {
    return { ...state, balance: state.balance + 10 };
  } else if (action.type === "WITHDRAW") {
    return { ...state, balance: state.balance - 1 };
  } else if (action.type === "BANK_CHARGE") {
    return { ...state, balance: state.balance - 10 };
  } else if (action.type === "INTEREST") {
    return { ...state, balance: state.balance + state.balance * 0.1 };
  }
  // If no action type matches, return the current state
  return state;
};

export const initialState = {
  // Start with money in the account
  balance: 1000,
};
export const reducers = (state = initialState, action) => {
  if (action.type === "DEPOSIT") {
    return { ...state, balance: state.balance + parseFloat(action.payload) };
  } else if (action.type === "WITHDRAW") {
    return { ...state, balance: state.balance - parseFloat(action.payload) };
  } else if (action.type === "BANK_CHARGE") {
    // Balance amount should decrease by 15%
    return { ...state, balance: state.balance - state.balance * 0.15 };
  } else if (action.type === "INTEREST") {
    // Balance amount should increase by 5%
    return { ...state, balance: state.balance + state.balance * 0.05 };
  }
  // If no action type matches, return the current state
  return state;
};

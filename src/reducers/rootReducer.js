const initialState = {
  isLoading: false,
  user: null,
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case "IS_LOADING":
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  isLoading: false,
  user: null,
  countries: [],
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case "IS_LOADING":
    case "SET_USER":
    case "SET_JWT_TOKEN":
    case "SAVE_COUNTRIES":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

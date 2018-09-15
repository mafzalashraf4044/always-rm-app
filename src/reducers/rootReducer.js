const TODAY_TAB_INDEX = 1;

const initialState = {
  isLoading: false,
  user: null,
  countries: [],
  rcrMyStoresTabIndex: TODAY_TAB_INDEX,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "IS_LOADING":
    case "SET_USER":
    case "SET_JWT_TOKEN":
    case "SAVE_COUNTRIES":
    case "SAVE_RCR_MY_STORES_TAB_INDEX":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


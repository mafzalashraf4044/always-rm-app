const initialState = {

};

export default (state: any = defaultState, action: Function) => {
  switch(action.type) {
    case 'SAMPLE_ACTION':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
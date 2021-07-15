export const routesReducer = (state = {history: []}, action: any) => {
  switch (action.type) {
    case "PUSH_HISTORY":
      return {...state, history: [...state.history, action.payload]}
    default:
      return state;
  }
};

/** Declare another file like this for another entry in redux store.
 *
 */
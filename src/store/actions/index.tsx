  /** Using redux thunk, we can handle async calls if dispatch functions are composed as: :
*/

interface RouteDispatchFunctionsInterface {
  pushRoute: (pageRoute: String) => (dispatch: any, getState: any) => Promise<void>;
}

const pushRoute = (pageRoute: String) => async (dispatch: any, getState: any) => {
  console.log(getState().nodes);
  dispatch({ type: 'PUSH_HISTORY', payload: pageRoute});
};


export const routeDispatchFunctions: RouteDispatchFunctionsInterface = { pushRoute };
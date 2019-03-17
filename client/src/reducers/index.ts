import { combineReducers } from 'redux';
import mainReducer, { Model as MainModel, defaultState as mainState } from '../services/main/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
export type AllModelReducer = {
  main: MainModel,
};





export const initialState: AllModelReducer = {
  main: mainState,
};
const reducers = (history: History) => combineReducers({
  router: connectRouter(history),
  main: mainReducer,
});

export default reducers;

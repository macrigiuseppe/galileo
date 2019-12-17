import { createStore, applyMiddleware, combineReducers } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import {taskMiddleware} from 'react-palm/tasks';

const initialState = {};

const reducers = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer,

  // Your other reducers here
});

// using createStore
export default createStore(
  reducers,
  initialState,
  applyMiddleware(taskMiddleware)
);

import {combineReducers} from 'redux';
import actionReducer from './ActionReducer';

const rootReducer = combineReducers({
  text: actionReducer,
});

export default rootReducer;

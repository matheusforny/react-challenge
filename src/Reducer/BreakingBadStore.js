import {createStore, applyMiddleware} from 'redux';
import {
  thunk,
} from 'redux-thunk';
import rootReducer from './BreakingBadReducer';

export default createStore(rootReducer,
    applyMiddleware(thunk),
);

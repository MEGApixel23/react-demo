import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './reducers/middlewares/promiseMiddleware';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, {
  issues: [],
  counter: 0
});

export default store;
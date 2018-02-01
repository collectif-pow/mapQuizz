import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}
middlewares.push(thunk);

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

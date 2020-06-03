import {applyMiddleware, createStore, combineReducers, compose} from 'redux'; // + compose  for CHROME REDUX DEVTOOLS
import Thunk from 'redux-thunk';
import EntityReducers from './entities/entities.reducer';

const usedMiddleware = [Thunk];


const combinedReducers = combineReducers({
    ...EntityReducers
});

const middleware = applyMiddleware(...usedMiddleware);

// for CHROME REDUX DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(combinedReducers, composeEnhancers(middleware));

// export default createStore(combinedReducers, middleware);

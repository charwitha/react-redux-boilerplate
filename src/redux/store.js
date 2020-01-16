import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import createHistory from 'history/createBrowserHistory'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const initialState = {}
const history = createHistory()
const middleware = [routerMiddleware(history)];
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(
        connectRouter(history)(rootReducer),
        initialState, 
        composedEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunk, ...middleware))
    );
}

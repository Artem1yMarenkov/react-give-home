import { createStore, applyMiddleware, compose } from 'redux'
import { authMiddleware } from './middleware/auth'
import combineReducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(combineReducers, composeEnhancers(applyMiddleware(authMiddleware)))

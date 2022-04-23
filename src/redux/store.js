import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { authMiddleware } from './middleware/auth'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, authMiddleware)))

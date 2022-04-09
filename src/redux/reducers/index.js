import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth'
import addNewReducer from './AddNew'

export default combineReducers({
  auth: authReducer,
  addnew: addNewReducer,
})

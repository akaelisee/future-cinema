// @ts-nocheck
import { combineReducers } from 'redux'
import library from './library'
import cardReducers from './cardReducers'
import login from './login'

export default combineReducers({
  library,
  cardReducers,
  login
})

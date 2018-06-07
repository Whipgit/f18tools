import { combineReducers } from 'redux'
import reciprocalReducer from './Reciprocal/ReciprocalReducer'

export default combineReducers({
  reciprocal: reciprocalReducer,
})

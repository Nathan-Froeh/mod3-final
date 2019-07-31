import {combineReducers} from 'redux';
import {getAnimalsReducer} from './getAnimalsReducer'
import {getDonationReducer} from './getDonationReducer'


export const allReducers = combineReducers({
  animals: getAnimalsReducer,
  donations: getDonationReducer
})
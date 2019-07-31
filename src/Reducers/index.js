import {combineReducers} from 'redux';
import {getAnimalsReducer} from './getAnimalsReducer'


const test = (state) => {
  switch(state) {
    default:
      return 'test'
  }
}

export const allReducers = combineReducers({
  test: test,
  animals: getAnimalsReducer
})
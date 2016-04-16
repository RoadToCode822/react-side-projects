import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    
    return [ action.payload.data, ...state ]; 

    //Another way to return a new array
    //return state.concat([action.payload.data]);
    //Don't do this:
    // state.push(action.payload.data), as it would have manipulated the original array
  }
  return state;
}
// State argument is not application state, only the state
// this reducer is responsible for

// state is undefined if we don't set state = null.
// When we return a state that is undefined, the reducer will
// throw an error
// state = null is an ES6 feature that tells us that when an argument
// comes in as undefined, set it to null
export default function(state = null, action) {
//For the actions that we do care about, use a switch/case
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }	
// Just return the current state if we receive an action that we
// don't care about. We need to return some sort of state
// or else we will get an error.
  return state
}
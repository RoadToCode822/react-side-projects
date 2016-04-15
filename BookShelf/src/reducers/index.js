import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

//state object which defines the application state stores the 'books'
//and 'activeBook' keys and their values, which are reducers

//Our global state object is passed two pieces of state at the moment:
//The 'books' key in our global state object defines the BooksReducer
//The 'activeBook' key defines the ActiveBook reducer.

export default rootReducer;

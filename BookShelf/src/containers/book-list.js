import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//Line 2 plugs out the 'connect' property, which is a function from react-redux;

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// The object being returned through this function will be the
// props object for this container
function mapStateToProps(state) {

  return {
    books: state.books
  };
}

// Whatever is returned from the function below will end up in our
// BookList container's props object

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to 
  //all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


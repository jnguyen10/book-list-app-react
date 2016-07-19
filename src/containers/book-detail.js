import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {


  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h2>Details for:</h2>
        <h4>Title: { this.props.book.title }</h4>
        <h4>Pages: { this.props.book.pages }</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSearch extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(UserSearch);

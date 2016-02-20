import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {
  render() {
    return (
      <div>
        <h1>User Page</h1>
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

export default connect(mapStateToProps)(UserPage);

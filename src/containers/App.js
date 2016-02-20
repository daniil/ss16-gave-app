import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>GaveApp</h1>
        <div>
          {this.props.children}
        </div>
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

export default connect(mapStateToProps)(App);

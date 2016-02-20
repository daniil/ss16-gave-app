import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrapApp } from 'actions/app-actions';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(bootstrapApp());
  }

  render() {
    const { app } = this.props;

    return (
      <p>Home</p>
    );
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Home);

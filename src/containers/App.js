import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrapApp } from 'actions/app-actions';
import TopNav from 'components/nav/top-nav';
import { routeActions } from 'react-router-redux';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(bootstrapApp());
  }

  render() {
    const { app, dispatch } = this.props;

    return (
      <div>
        <h1 onClick={::this.goHome}>GaveApp</h1>
        <TopNav app={app}
                dispatch={dispatch} />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

  goHome() {
    const { dispatch } = this.props;
    dispatch(routeActions.push('/'));
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(App);

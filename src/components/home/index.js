import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrapApp, loginUser, logoutUser } from 'actions/app-actions';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(bootstrapApp());
  }

  render() {
    const { app } = this.props;

    return (
      <div>
        {
          !app.isAuthenticated &&
          <button className="pure-button pure-button-primary"
                  onClick={::this.onLogin}>
            <i className="fa fa-facebook-square"></i>
            Login with Facebook
          </button>
        }
        {
          app.isAuthenticated &&
          <button className="pure-button pure-button-primary"
                  onClick={::this.onLogout}>
            <i className="fa fa-sign-out"></i>
            Logout
          </button>
        }
      </div>
    );
  }

  onLogin() {
    const { dispatch } = this.props;
    dispatch(loginUser());
  }

  onLogout() {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrapApp, logoutUser } from 'actions/app-actions';
import TopNav from 'components/nav/top-nav';
import AccountInfo from 'components/ui/account-info';
import { routeActions } from 'react-router-redux';
import baseStyles from 'styles/base.scss';
import classnames from 'classnames';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(bootstrapApp());
  }

  render() {
    const { app, location, dispatch } = this.props;

    return (
      <div>
        <header className={classnames(
                  baseStyles.header,
                  {[baseStyles.isHomePage]: location.pathname === '/'},
                  {[baseStyles.isWishlistPage]: location.pathname.indexOf('wishlists') !== -1}
                )}>
          {
              app.isAuthenticated &&
              <AccountInfo app={app}
                           onLogout={::this.onLogout} />
          }

          <TopNav app={app}
                  dispatch={dispatch} />
        </header>
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

  onLogout(e) {
    const { dispatch } = this.props;
    dispatch(logoutUser());
    e.preventDefault();
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(App);

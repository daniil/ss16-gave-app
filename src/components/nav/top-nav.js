import React, { Component } from 'react';
import { loginUser, logoutUser } from 'actions/app-actions';
import WishlistSearch from 'components/ui/wishlist-search';
import { routeActions } from 'react-router-redux';
import baseStyles from 'styles/base.scss';
import classnames from 'classnames';

export default class TopNav extends Component {
  render() {
    const { app } = this.props;

    return (
      <div className={
                  classnames(
                    baseStyles.topNav
                  )
      }>
        {
          !app.isAuthenticated &&
          <button className={
                    classnames(
                        'pure-button',
                        'pure-button-primary',
                        baseStyles.pureButton,
                        baseStyles.pureButtonPrimary
                    )
                  }
                  onClick={::this.onLogin}>
            <i className="fa fa-facebook-square"></i>
            Login with Facebook
          </button>
        }
        {
          app.isAuthenticated &&
          <WishlistSearch onWishlistSearch={::this.onWishlistSearch} />
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

  onWishlistSearch(val) {
    const { dispatch } = this.props;
    dispatch(routeActions.push(`/wishlists/${val}`));
  }
}

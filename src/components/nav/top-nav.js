import React, { Component } from 'react';
import { loginUser } from 'actions/app-actions';
import WishlistSearch from 'components/ui/wishlist-search';
import { routeActions } from 'react-router-redux';
import baseStyles from 'styles/base.scss';
import classnames from 'classnames';

export default class TopNav extends Component {
  render() {
    const { app } = this.props;

    return (
      <div className={baseStyles.topNav}>
        <h1>GaveApp</h1>
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
      </div>
    );
  }

  onLogin() {
    const { dispatch } = this.props;
    dispatch(loginUser());
  }

  onWishlistSearch(val) {
    const { dispatch } = this.props;
    dispatch(routeActions.push(`/wishlists/${val}`));
  }
}

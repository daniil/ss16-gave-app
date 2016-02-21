import React, { Component } from 'react';
import WishlistSearch from 'components/ui/wishlist-search';
import { routeActions } from 'react-router-redux';
import baseStyles from 'styles/base.scss';
import classnames from 'classnames';

export default class TopNav extends Component {
  render() {
    const { app, isHomePage } = this.props;

    return (
      <div className={classnames(baseStyles.topNav)}>
        <h1 className={ classnames(baseStyles.logo)}
            onClick={::this.goHome}>Gave</h1>
        {
          app.isAuthenticated &&
          <WishlistSearch onWishlistSearch={::this.onWishlistSearch}
                          isHomePage={isHomePage} />
        }
      </div>
    );
  }

  onWishlistSearch(val) {
    const { dispatch } = this.props;
    dispatch(routeActions.push(`/wishlists/${val}`));
  }

  goHome() {
    const { dispatch } = this.props;
    dispatch(routeActions.push('/'));
  }
}

import React, { Component } from 'react';
import WishlistSearch from 'components/ui/wishlist-search';
import { routeActions } from 'react-router-redux';
import baseStyles from 'styles/base.scss';

export default class TopNav extends Component {
  render() {
    const { app } = this.props;

    return (
      <div className={baseStyles.topNav}>
        <h1 className={ classnames(baseStyles.logo)}>Gave</h1>
        <img src="./static/gave_logo.png" alt=""/>
        {
          app.isAuthenticated &&
          <WishlistSearch onWishlistSearch={::this.onWishlistSearch} />
        }
      </div>
    );
  }

  onWishlistSearch(val) {
    const { dispatch } = this.props;
    dispatch(routeActions.push(`/wishlists/${val}`));
  }
}

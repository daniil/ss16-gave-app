import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWishlist, addWishlistItem } from 'actions/app-actions';
import WishlistItems from 'components/wishlist/wishlist-items';

class Wishlist extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getWishlist(params.wishlistId));
  }

  render() {
    const { app, params } = this.props;

    return (
      <div>
        <h1>Wishlist</h1>
        {
          !app.currentWishlist &&
          <div>
            <p>No items for {params.wishlistId}</p>
            <p>Be the first to add one below</p>
          </div>
        }
        <form className="pure-form">
          <input className="pure-input-1"
                 type="text"
                 ref="wishlistItem"
                 placeholder="Add a new wishlist item"
                 onKeyPress={::this.onItemAdd} />
        </form>
        {
          app.currentWishlist &&
          <WishlistItems items={app.currentWishlist.items} />
        }
      </div>
    );
  }

  onItemAdd(e) {
    const { app, params, dispatch } = this.props;

    if (e && e.which === 13) {
      dispatch(addWishlistItem(params.wishlistId, {
        userId: app.loggedInUser.uid,
        title: this.refs.wishlistItem.value,
        voteCount: 1,
        status: 0
      }));
      e.preventDefault();
    }
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Wishlist);

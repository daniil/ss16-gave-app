import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWishlist, addWishlistItem, voteUp } from 'actions/app-actions';
import WishlistItems from './wishlist-items';
import styles from './styles.scss';

class Wishlist extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getWishlist(params.wishlistId));
  }

  render() {
    const { app, params } = this.props;

    return (
      <div>
        <h2>
          Wishlist for
          <span className={styles.wishlistId}>
            {params.wishlistId}
          </span>
        </h2>
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
          <WishlistItems items={app.currentWishlist.items}
                         statusTypes={app.statusTypes}
                         user={app.loggedInUser}
                         onVoteUp={::this.onVoteUp} />
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
        status: 0,
        voters: {
          [app.loggedInUser.uid]: Date.now()
        },
        dateCreated: Date.now()
      }));
      this.refs.wishlistItem.value = '';
      e.preventDefault();
    }
  }

  onVoteUp(wishlistItemKey) {
    const { dispatch, app } = this.props;
    dispatch(voteUp(this.props.params.wishlistId, app.loggedInUser.uid, wishlistItemKey));
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Wishlist);

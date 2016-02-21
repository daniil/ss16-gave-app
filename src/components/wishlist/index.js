import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWishlist, addWishlistItem, voteUp, changeWishlistItemStatus } from 'actions/app-actions';
import WishlistItems from './wishlist-items';
import styles from './styles.scss';
import classnames from 'classnames';

class Wishlist extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getWishlist(params.wishlistId));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, params } = this.props;
    if (params.wishlistId !== nextProps.params.wishlistId) {
      dispatch(getWishlist(nextProps.params.wishlistId));
    }
  }

  render() {
    const { app, params } = this.props;

    return (
      <div className={ classnames(styles.wishlistContainer)}>
        <h2 className={classnames(styles.wishlistTitle)}>
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
        <form className={classnames("pure-form", styles.addNewForm)}>
          <input className={classnames("pure-input-1", styles.addNewInput)}
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
                         onVoteUp={::this.onVoteUp}
                         onStatusChange={::this.onStatusChange} />
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

  onStatusChange(wishlistItemKey, statusId) {
    const { dispatch, app } = this.props;
    dispatch(changeWishlistItemStatus(
      this.props.params.wishlistId,
      app.loggedInUser.uid,
      wishlistItemKey,
      statusId
    ));
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Wishlist);

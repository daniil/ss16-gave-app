import React, { Component } from 'react';
import WishlistItem from './wishlist-item';

export default class WishlistItems extends Component {
  render() {
    const { items, statusTypes, user, onVoteUp, onStatusChange } = this.props;
    const itemsArr = this.convertItemsToArr(items);

    return (
        <ul>
          {
            itemsArr.map((item, i) => {
              return (
                <WishlistItem key={i}
                              item={item}
                              statusTypes={statusTypes}
                              user={user}
                              onVoteUp={onVoteUp}
                              onStatusChange={onStatusChange} />
              );
            })
          }
      </ul>
    );
  }

  convertItemsToArr(items) {
    const itemsArr = [];

    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        itemsArr.push(Object.assign({}, items[key], {
          key
        }));
      }
    }

    itemsArr.sort((a, b) => { return b.voteCount - a.voteCount; });

    return itemsArr;
  }
}

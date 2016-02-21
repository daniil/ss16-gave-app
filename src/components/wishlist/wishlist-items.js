import React, { Component } from 'react';
import WishlistItem from './wishlist-item';

export default class WishlistItems extends Component {
  render() {
    const { items, user, onVoteUp } = this.props;
    const itemsArr = this.convertItemsToArr(items);

    return (
      <table className="pure-table pure-table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Votes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            itemsArr.map((item, i) => {
              return (
                <WishlistItem key={i}
                              item={item}
                              user={user}
                              onVoteUp={onVoteUp} />
              );
            })
          }
        </tbody>
      </table>
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

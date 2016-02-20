import React, { Component } from 'react';
import WishlistItem from './wishlist-item';

export default class WishlistItems extends Component {
  render() {
    const { items } = this.props;
    const itemsArr = this.convertItemsToArr(items);

    return (
      <div>
        {
          itemsArr.map((item, i) => {
            return <WishlistItem item={item} key={i} />;
          })
        }
      </div>
    );
  }

  convertItemsToArr(items) {
    const itemsArr = [];

    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        itemsArr.push(items[key]);
      }
    }

    return itemsArr;
  }
}

import React, { Component } from 'react';

export default class WishlistItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        {item.title} Votes: {item.voteCount}
      </div>
    );
  }
}

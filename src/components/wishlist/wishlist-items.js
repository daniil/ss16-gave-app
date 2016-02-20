import React, { Component } from 'react';

export default class WishlistItems extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items}
      </div>
    );
  }
}

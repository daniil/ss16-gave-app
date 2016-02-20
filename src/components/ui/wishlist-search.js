import React, { Component } from 'react';
import { connect } from 'react-redux';

class WishlistSearch extends Component {
  render() {
    return (
      <div>
        <form className="pure-form">
          <input className="pure-input-1"
                 type="text"
                 ref="searchByNumber"
                 placeholder="Search by phone number and press Enter"
                 onKeyPress={::this.onSearch} />
        </form>
      </div>
    );
  }

  onSearch(e) {
    const { onWishlistSearch } = this.props;

    if (e && e.which === 13) {
      onWishlistSearch(this.refs.searchByNumber.value);
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

export default connect(mapStateToProps)(WishlistSearch);

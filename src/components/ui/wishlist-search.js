import React, { Component } from 'react';
import { connect } from 'react-redux';

class WishlistSearch extends Component {

  state = {
    searchValue: '',
    validated: true
  };

  render() {
    return (
        <div>
          <form className="pure-form">
            <input className="pure-input-1"
                   type="text"
                   ref="searchByNumber"
                   placeholder="Search by phone number and press Enter"
                   value={this.state.searchValue}
                   onChange={::this.onChangeHandler}
                   onKeyPress={::this.onKeyPressHandler} />

          </form>
        </div>
    );
  }

  onKeyPressHandler(e) {
    const { onWishlistSearch } = this.props;

    if (e && e.which === 13) {
      onWishlistSearch(this.state.searchValue);
      e.preventDefault();
    }
  }

  onChangeHandler(e) {
    this.setState({
      searchValue: e.target.value.replace(/\D/g, '')
    });
  }

}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(WishlistSearch);

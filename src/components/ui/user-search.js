import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSearch extends Component {
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
    const { onUserSearch } = this.props;

    if (e && e.which === 13) {
      onUserSearch(this.refs.searchByNumber.value);
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

export default connect(mapStateToProps)(UserSearch);

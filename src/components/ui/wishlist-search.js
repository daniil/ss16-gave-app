import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import classnames from 'classnames';

class WishlistSearch extends Component {
  state = {
    searchValue: '',
    validated: false
  };

  componentDidMount() {
    this.refs.searchByNumber.focus();
  }

  render() {
    return (
        <div>
          <h2>Find a friend's gifts list</h2>
          <h6>if your friend has a gift list, you can find it by searching</h6>
          <form className="pure-form pure-form-stacked pure-g">
            <div className="pure-u-22-24">
              <input id="phoneNumber"
                     className="pure-input-1"
                     type="text"
                     ref="searchByNumber"
                     placeholder="Search by phone number"
                     value={this.state.searchValue}
                     onChange={::this.onChangeHandler}
                     onKeyPress={::this.onKeyPressHandler} />
            </div>
            <div className={classnames(
                   'pure-u-2-24',
                   styles.searchStatusIcon
                 )}>
              <i className={classnames(
                   'fa',
                   styles.searchStatus,
                   {['fa-eye-slash']: !this.state.validated},
                   {[styles.searchStatusInvalid]: !this.state.validated},
                   {['fa-check']: this.state.validated},
                   {[styles.searchStatusValid]: this.state.validated}
                 )}></i>
            </div>
            <div className="pure-u-1">
              <span className={styles.instructions}>
                Please enter 5 to 10 digits of the phone number only and press Enter when complete
              </span>
            </div>
          </form>
        </div>
    );
  }

  onKeyPressHandler(e) {
    const { onWishlistSearch } = this.props;
    const numberLength = this.state.searchValue.length;

    if (e && e.which === 13) {
      if (numberLength >= 5 && numberLength <= 10) {
        onWishlistSearch(this.state.searchValue);
        this.setState({
          validated: false,
          searchValue: ''
        });
      }
      e.preventDefault();
    }
  }

  onChangeHandler(e) {
    const numberLength = e.target.value.length;

    this.setState({
      validated: numberLength >= 5 && numberLength <= 10,
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

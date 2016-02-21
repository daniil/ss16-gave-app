import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './home.scss';
import classnames from 'classnames';

class Home extends Component {
  render() {
    return (
      <div className={ classnames(styles.homeBannerText)}>
        <p className={ classnames(styles.homeBannerTextp1)}>Be a true BFF</p>
        <p className={ classnames(styles.homeBannerTextp2)}>Find the <strong>best gifts </strong> for 'em</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Home);

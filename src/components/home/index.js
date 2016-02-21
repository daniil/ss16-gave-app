import React, { Component } from 'react';
import { loginUser } from 'actions/app-actions';
import { connect } from 'react-redux';
import styles from './home.scss';
import baseStyles from 'styles/base.scss';
import classnames from 'classnames';

class Home extends Component {
  render() {
    const { app } = this.props;

    let html;

    if (app.isAuthenticated) {
      html = (<p>Welcome back</p>);
    } else {
      html = (
        <div className={ classnames(styles.homeBannerText)}>
          <p className={ classnames(styles.homeBannerTextp1)}>Be a true BFF</p>
          <p className={ classnames(styles.homeBannerTextp2)}>Find the <strong>best gifts </strong> for &rsquo;em</p>
          <button className={
                    classnames(
                      'pure-button',
                      'pure-button-primary',
                      baseStyles.pureButton,
                      baseStyles.pureButtonPrimary
                    )
                  }
                  onClick={::this.onLogin}>
            <i className="fa fa-facebook-square"></i>
            Login with Facebook
          </button>
        </div>
      );
    }

    return (
      <div>{html}</div>
    );
  }

  onLogin() {
    const { dispatch } = this.props;
    dispatch(loginUser());
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Home);

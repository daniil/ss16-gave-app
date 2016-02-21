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
      html = (
        <div className={styles.welcomeBlurb}>
          <h2>Welcome!</h2>
          <p><strong>GaveApp</strong> is a gift giving idea generator available across all devices. GaveApp uses your social media login to access your friends, family, co-workers and acquaintances preferences. These preferences translate into gift ideas and help you, the giver, with gift ideas.</p>
          <p>GaveApp takes the pain, frustration and guessing game out of gift giving. You see it’s really simple; you log in, type the person’s phone number in and begin. There may be a list of gift ideas already created for them, or you can go ahead and start the list.</p>
          <p>You have the option of leaving the gift idea up for grabs, calling dibbs on the product or marking the gift as ‘taken’ with hopes of course that you go ahead and purchase it.</p>
        </div>
      );
    } else {
      html = (
        <div className={styles.welcomePage}>
          <div className={ classnames(styles.homeBannerText)}>
            <h1 className={styles.welcomePageH1}>GaveApp</h1>
            <p className={ classnames(styles.homeBannerTextp1)}>Be a true BFF</p>
            <p className={ classnames(styles.homeBannerTextp2)}>Find the <strong>best gifts </strong> for &rsquo;em</p>
            <button className={
                      classnames(
                        'pure-button',
                        'pure-button-primary',
                        baseStyles.pureButtonPrimary
                      )
                    }
                    onClick={::this.onLogin}>
              <i className="fa fa-facebook-square"></i>
              <span className={baseStyles.textAfterIcon}>Login with Facebook</span>
            </button>
          </div>
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

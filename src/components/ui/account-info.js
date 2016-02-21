import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

export default class AccountInfo extends Component {
  render() {
    const { app, onLogout } = this.props;

    return (
      <div className={styles.accountInfo}>
        {
          app.isAuthenticated &&
          <div>
            <img className={styles.profileImage}
                 src={app.loggedInUser.facebook.profileImageURL} />
            <span className={styles.profileName}>
              {app.loggedInUser.facebook.displayName}
            </span>
            <a href="#"
               className={styles.logoutLink}
               onClick={onLogout}>
              Logout
            </a>
          </div>
        }
      </div>
    );
  }
}

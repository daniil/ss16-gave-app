import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';
import StatusPicker from './status-picker';

export default class WishlistItem extends Component {
  render() {
    const { item, statusTypes, user, onVoteUp, onStatusChange } = this.props;

    return (
        <li>
                <span>{item.title}</span>
                <span className={styles.voteCountCell}>
                    <span className={styles.voteCount}>
                        {item.voteCount}
                    </span>
                </span>
                <span>
                    <i className={classnames(
               'fa',
               'fa-heart',
               {[styles.alreadyVoted]: !item.voters[user.uid]}
             )}
             onClick={() => { this.onVoteUp(item.key); }}></i>
                </span>
            <span>
              {
                statusTypes && <StatusPicker item={item}
                                             user={user}
                                             statusTypes={statusTypes}
                                             onStatusChange={onStatusChange} />
              }
            </span>
      </li>
    );
  }

  onVoteUp(key) {
    const { item, user, onVoteUp } = this.props;

    if (item.voters[user.uid]) {
      return;
    }

    onVoteUp(key);
  }
}

import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';
import StatusPicker from './status-picker';

export default class WishlistItem extends Component {
  render() {
    const { item, statusTypes, user, onVoteUp } = this.props;

    return (
      <tr>
        <td>
          {item.title}
        </td>
        <td className={styles.voteCountCell}>
          <span className={styles.voteCount}>
            {item.voteCount}
          </span>
        </td>
        <td>
          <i className={classnames(
               'fa',
               'fa-heart',
               {[styles.alreadyVoted]: !item.voters[user.uid]}
             )}
             onClick={() => { this.onVoteUp(item.key); }}></i>
        </td>
        <td>
          {
            statusTypes && <StatusPicker item={item}
                                         statusTypes={statusTypes} />
          }
        </td>
      </tr>
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

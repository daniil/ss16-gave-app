import React, { Component } from 'react';
import styles from './styles.scss';

export default class WishlistItem extends Component {
  render() {
    const { item, user, onVoteUp } = this.props;

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
          {
            !item.voters[user.uid] &&
            <i className="fa fa-thumbs-up"
               onClick={() => { onVoteUp(item.key); }}></i>
          }
        </td>
      </tr>
    );
  }
}

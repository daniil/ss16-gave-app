import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

export default class StatusPicker extends Component {
  render() {
    const { item, statusTypes } = this.props;
    const statusTypesArr = this.convertItemsToArr(statusTypes);

    return (
      <div>
        {
          statusTypesArr.map((statusType, i) => {
            return (
              <span key={i}
                    className={classnames(
                      styles.statusText,
                      {[styles[`statusText${i}`]]: item.status === i}
                    )}>
                {
                  item.status === i
                  ? statusType
                  : this.isStatusChangeAllowed()
                    ? <a href="#"
                         onClick={(e) => { this.onStatusChange(e, i); }}>
                         {statusType}
                      </a>
                    : statusType
                }
              </span>
            );
          })
        }
      </div>
    );
  }

  onStatusChange(e, statusId) {
    const { item, onStatusChange } = this.props;
    onStatusChange(item.key, statusId);
    e.preventDefault();
  }

  isStatusChangeAllowed() {
    const { item, user } = this.props;

    if (typeof item.statusOwner === 'undefined') {
      return true;
    }

    if (item.statusOwner === user.uid) {
      return true;
    }

    return false;
  }

  convertItemsToArr(items) {
    const itemsArr = [];

    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        itemsArr.push(items[key]);
      }
    }

    return itemsArr;
  }
}

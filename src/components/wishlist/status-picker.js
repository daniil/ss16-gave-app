import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

export default class StatusPicker extends Component {
  render() {
    const { item, statusTypes } = this.props;

    return (
      <div>{statusTypes[item.status]}</div>
    );
  }
}

import classNames from 'classnames';
import React from 'react';

import styles from './divider.css';

const Divider = ({className}) => (
    <div className={classNames(styles.divider, className)} />
);


export default Divider;

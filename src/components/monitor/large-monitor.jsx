import React from 'react';
import styles from './monitor.css';

const LargeMonitor = ({categoryColor, value}) => (
    <div className={styles.largeMonitor}>
        <div
            className={styles.largeValue}
            style={{background: categoryColor}}
        >
            {value}
        </div>
    </div>
);


export default LargeMonitor;

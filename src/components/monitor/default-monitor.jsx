import React from 'react';
import styles from './monitor.css';

const DefaultMonitor = ({categoryColor, label, value}) => (
    <div className={styles.defaultMonitor}>
        <div className={styles.row}>
            <div className={styles.label}>
                {label}
            </div>
            <div
                className={styles.value}
                style={{background: categoryColor}}
            >
                {value}
            </div>
        </div>
    </div>
);


export default DefaultMonitor;

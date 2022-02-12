import React from 'react';
import classNames from 'classnames';

import styles from './monitor.css';

const SliderMonitor = ({categoryColor, isDiscrete, label, min, max, value, onSliderUpdate}) => (
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
        <div className={styles.row}>
            <input
                className={classNames(styles.slider, 'no-drag')} // Class used on parent Draggable to prevent drags
                max={max}
                min={min}
                step={isDiscrete ? 1 : 0.01}
                type="range"
                value={value}
                onChange={onSliderUpdate}
            />
        </div>

    </div>
);


SliderMonitor.defaultProps = {
    isDiscrete: true,
    min: 0,
    max: 100
};

export default SliderMonitor;

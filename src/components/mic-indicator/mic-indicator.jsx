import React from 'react';
import styles from './mic-indicator.css';
import micIcon from './mic-indicator.svg';
import {stageSizeToTransform} from '../../lib/screen-utils';

const MicIndicatorComponent = props => (
    <div
        className={props.className}
        style={stageSizeToTransform(props.stageSize)}
    >
        <img
            className={styles.micImg}
            src={micIcon}
        />
    </div>
);



export default MicIndicatorComponent;

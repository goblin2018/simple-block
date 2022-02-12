import React from 'react';

import styles from './watermark.css';

const Watermark = props => (
    <img
        className={styles.spriteImage}
        src={props.costumeURL}
    />
);



export default Watermark;

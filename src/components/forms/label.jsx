import React from 'react';

import styles from './label.css';

const Label = props => (
    <label className={props.above ? styles.inputGroupColumn : styles.inputGroup}>
        <span className={props.secondary ? styles.inputLabelSecondary : styles.inputLabel}>
            {props.text}
        </span>
        {props.children}
    </label>
);



Label.defaultProps = {
    above: false,
    secondary: false
};

export default Label;

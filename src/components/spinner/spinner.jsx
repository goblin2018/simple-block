import classNames from 'classnames';
import React from 'react';

import styles from './spinner.css';

const SpinnerComponent = function (props) {
    const {
        className,
        level,
        small,
        large
    } = props;
    return (
        <div
            className={classNames(
                className,
                styles.spinner,
                styles[level],
                {
                    [styles.small]: small,
                    [styles.large]: large
                }
            )}
        />
    );
};

SpinnerComponent.defaultProps = {
    className: '',
    large: false,
    level: 'info',
    small: false
};
export default SpinnerComponent;

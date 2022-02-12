import classNames from 'classnames';
import React from 'react';

import styles from './button.css';

const ButtonComponent = ({
    className,
    disabled,
    iconClassName,
    iconSrc,
    onClick,
    children,
    ...props
}) => {

    if (disabled) {
        onClick = function () {};
    }

    const icon = iconSrc && (
        <img
            className={classNames(iconClassName, styles.icon)}
            draggable={false}
            src={iconSrc}
        />
    );

    return (
        <span
            className={classNames(
                styles.outlinedButton,
                className
            )}
            role="button"
            onClick={onClick}
            {...props}
        >
            {icon}
            <div className={styles.content}>{children}</div>
        </span>
    );
};



export default ButtonComponent;

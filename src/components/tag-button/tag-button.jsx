import classNames from 'classnames';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import Button from '../button/button.jsx';

import styles from './tag-button.css';

const TagButtonComponent = ({
    active,
    iconClassName,
    className,
    tag, // eslint-disable-line no-unused-vars
    intlLabel,
    ...props
}) => (
    <Button
        className={classNames(
            styles.tagButton,
            className, {
                [styles.active]: active
            }
        )}
        iconClassName={classNames(
            styles.tagButtonIcon,
            iconClassName
        )}
        {...props}
    >
        <FormattedMessage {...intlLabel} />
    </Button>
);


TagButtonComponent.defaultProps = {
    active: false
};

export default TagButtonComponent;

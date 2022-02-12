import classNames from 'classnames';
import React from 'react';

import styles from './user-avatar.css';

const UserAvatar = ({
    className,
    imageUrl
}) => (
    <img
        className={classNames(
            className,
            styles.userThumbnail
        )}
        src={imageUrl}
    />
);


export default UserAvatar;

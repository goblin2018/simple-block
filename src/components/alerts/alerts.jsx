import React from 'react';

import Box from '../box/box.jsx';
import Alert from '../../containers/alert.jsx';

import styles from './alerts.css';

const AlertsComponent = ({
    alertsList,
    className,
    onCloseAlert
}) => (
    <Box
        bounds="parent"
        className={className}
    >
        <Box className={styles.alertsInnerContainer} >
            {alertsList.map((a, index) => (
                <Alert
                    closeButton={a.closeButton}
                    content={a.content}
                    extensionId={a.extensionId}
                    extensionName={a.extensionName}
                    iconSpinner={a.iconSpinner}
                    iconURL={a.iconURL}
                    index={index}
                    key={index}
                    level={a.level}
                    message={a.message}
                    showDownload={a.showDownload}
                    showReconnect={a.showReconnect}
                    showSaveNow={a.showSaveNow}
                    onCloseAlert={onCloseAlert}
                />
            ))}
        </Box>
    </Box>
);


export default AlertsComponent;

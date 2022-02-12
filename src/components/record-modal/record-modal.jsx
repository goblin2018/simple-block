import React from 'react';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import RecordingStep from '../../containers/recording-step.jsx';
import PlaybackStep from '../../containers/playback-step.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './record-modal.css';

const messages = defineMessages({
    title: {
        defaultMessage: 'Record Sound',
        description: 'Recording modal title',
        id: 'gui.recordModal.title'
    }
});

const RecordModal = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={props.intl.formatMessage(messages.title)}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            {props.samples ? (
                <PlaybackStep
                    encoding={props.encoding}
                    levels={props.levels}
                    playhead={props.playhead}
                    playing={props.playing}
                    sampleRate={props.sampleRate}
                    samples={props.samples}
                    trimEnd={props.trimEnd}
                    trimStart={props.trimStart}
                    onBack={props.onBack}
                    onPlay={props.onPlay}
                    onSetPlayhead={props.onSetPlayhead}
                    onSetTrimEnd={props.onSetTrimEnd}
                    onSetTrimStart={props.onSetTrimStart}
                    onStopPlaying={props.onStopPlaying}
                    onSubmit={props.onSubmit}
                />
            ) : (
                <RecordingStep
                    recording={props.recording}
                    onRecord={props.onRecord}
                    onStopRecording={props.onStopRecording}
                />
            )}
        </Box>
    </Modal>
);


export default injectIntl(RecordModal);

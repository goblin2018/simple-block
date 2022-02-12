import bindAll from 'lodash.bindall';
import React from 'react';

import DirectionComponent, {RotationStyles} from '../components/direction-picker/direction-picker.jsx';

class DirectionPicker extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleOpenPopover',
            'handleClosePopover',
            'handleClickLeftRight',
            'handleClickDontRotate',
            'handleClickAllAround'
        ]);
        this.state = {
            popoverOpen: false
        };
    }
    handleOpenPopover () {
        this.setState({popoverOpen: true});
    }
    handleClosePopover () {
        this.setState({popoverOpen: false});
    }
    handleClickAllAround () {
        this.props.onChangeRotationStyle(RotationStyles.ALL_AROUND);
    }
    handleClickLeftRight () {
        this.props.onChangeRotationStyle(RotationStyles.LEFT_RIGHT);
    }
    handleClickDontRotate () {
        this.props.onChangeRotationStyle(RotationStyles.DONT_ROTATE);
    }
    render () {
        return (
            <DirectionComponent
                direction={this.props.direction}
                disabled={this.props.disabled}
                labelAbove={this.props.labelAbove}
                popoverOpen={this.state.popoverOpen && !this.props.disabled}
                rotationStyle={this.props.rotationStyle}
                onChangeDirection={this.props.onChangeDirection}
                onClickAllAround={this.handleClickAllAround}
                onClickDontRotate={this.handleClickDontRotate}
                onClickLeftRight={this.handleClickLeftRight}
                onClosePopover={this.handleClosePopover}
                onOpenPopover={this.handleOpenPopover}
            />
        );
    }
}



export default DirectionPicker;

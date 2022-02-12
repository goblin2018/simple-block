import React from 'react';

import bindAll from 'lodash.bindall';

class SortableAsset extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'setRef'
        ]);
    }
    componentDidMount () {
        this.props.onAddSortable(this.ref);
    }
    componentWillUnmount () {
        this.props.onRemoveSortable(this.ref);
    }
    setRef (ref) {
        this.ref = ref;
    }
    render () {
        return (
            <div
                className={this.props.className}
                ref={this.setRef}
                style={{
                    order: this.props.index
                }}
            >
                {this.props.children}
            </div>
        );
    }
}



export default SortableAsset;

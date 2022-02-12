import bindAll from 'lodash.bindall';
import React from 'react';

import {MenuItem as MenuItemComponent} from '../components/menu/menu.jsx';

class MenuItem extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'navigateToHref'
        ]);
    }
    navigateToHref () {
        if (this.props.href) window.location.href = this.props.href;
    }
    render () {
        const {
            children,
            className,
            onClick
        } = this.props;
        const clickAction = onClick ? onClick : this.navigateToHref;
        return (
            <MenuItemComponent
                className={className}
                onClick={clickAction}
            >
                {children}
            </MenuItemComponent>
        );
    }
}


export default MenuItem;

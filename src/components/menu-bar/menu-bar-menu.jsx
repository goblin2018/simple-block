import React from 'react';
import Menu from '../../containers/menu.jsx';

const MenuBarMenu = ({
    children,
    className,
    onRequestClose,
    open,
    place = 'right'
}) => (
    <div className={className}>
        <Menu
            open={open}
            place={place}
            onRequestClose={onRequestClose}
        >
            {children}
        </Menu>
    </div>
);



export default MenuBarMenu;

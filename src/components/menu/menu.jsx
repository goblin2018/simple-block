import classNames from 'classnames';
import React from 'react';

import styles from './menu.css';

const MenuComponent = ({
    className = '',
    children,
    componentRef,
    place = 'right'
}) => (
    <ul
        className={classNames(
            styles.menu,
            className,
            {
                [styles.left]: place === 'left',
                [styles.right]: place === 'right'
            }
        )}
        ref={componentRef}
    >
        {children}
    </ul>
);




const MenuItem = ({
    children,
    className,
    onClick
}) => (
    <li
        className={classNames(
            styles.menuItem,
            styles.hoverable,
            className
        )}
        onClick={onClick}
    >
        {children}
    </li>
);


const addDividerClassToFirstChild = (child, id) => (
    child && React.cloneElement(child, {
        className: classNames(
            child.className,
            {[styles.menuSection]: id === 0}
        ),
        key: id
    })
);

const MenuSection = ({children}) => (
    <React.Fragment>{
        React.Children.map(children, addDividerClassToFirstChild)
    }</React.Fragment>
);



export {
    MenuComponent as default,
    MenuItem,
    MenuSection
};

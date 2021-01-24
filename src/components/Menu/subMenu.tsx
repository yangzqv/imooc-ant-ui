import React, { useContext, } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const {
    index,
    title,
    className,
    style,
    children
  } = props

  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  });

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { type: { displayName }} = childElement;
      if (displayName === 'MenuItem') {
        return childElement;
      } else {
        console.error('Warning: which is not a MenuItem component');
      }
    });

    return (
      <ul className="viking-submenu">{childrenComponent}</ul>
    )
  }

  return (
    <li
      key={index}
      style={style}
      className={classes}
    >
      <div className='submenu-title'>{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu;
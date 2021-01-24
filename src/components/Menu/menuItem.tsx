import React, { useContext, FC } from 'react';
import classNames from 'classnames';
import { MenuItemProps, menuContext } from './menuProps';

const MenuItem: FC<MenuItemProps> = props => {
  const {
    index,
    disabled,
    className,
    style,
    children
  } = props;

  const context = useContext(menuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === context.index
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index);
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  );
}

MenuItem.displayName = 'MenuItem';
export default MenuItem;
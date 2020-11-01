import React, { FC, CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = props => {
  const {
    index,
    disabled,
    className,
    style,
    children
  } = props;

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
  });

  return (
    <li className={classes} style={style}>{children}</li>
  );
}

export default MenuItem;
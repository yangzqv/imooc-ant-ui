import React, { FC, CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: (selectedIndex: number) => void;
  children?: ReactNode;
}

const Menu: FC<MenuProps> = props => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children
  } = props;

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu;


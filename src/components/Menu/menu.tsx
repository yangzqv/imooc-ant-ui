import React, { useState, createContext, FC, CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback; // 用户可能会通过回调做一些自定义操作
  children?: ReactNode;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({index: 0});

const Menu: FC<MenuProps> = props => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect
  } = props;
  const [curActive, setCurActive] = useState(defaultIndex);

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
  });
  const handleClick = (index: number) => {
    setCurActive(index);
    onSelect && onSelect(index);
  }
  const passedContext: IMenuContext = {
    index: curActive || 0,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu;
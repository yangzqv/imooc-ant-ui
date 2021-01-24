import React, { useContext, useState, } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
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
  const opendSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend = (index && context.mode === 'vertical') ? opendSubMenus.includes(index) : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  });
  let timer: any; // 让关闭/打开更平滑

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  }
  const clickEvents = context.mode === 'vertical'
    ? { onClick: handleClick }
    : {}
  const hoverEvents = context.mode !== 'vertical'
    ? {
      onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
      onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    }
    : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('viking-submenu', { 'menu-opened': menuOpen });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { type: { displayName }} = childElement;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}`});
      } else {
        console.error('Warning: which is not a MenuItem component');
      }
    });

    return (
      <ul className={subMenuClasses}>{childrenComponent}</ul>
    )
  }

  return (
    <li
      key={index}
      style={style}
      className={classes}
      {...hoverEvents}
    >
      <div className='submenu-title' {...clickEvents}>{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu;
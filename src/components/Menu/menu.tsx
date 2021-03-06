import React, { useState } from 'react';
import classNames from 'classnames';
import { MenuProps, IMenuContext, MenuItemProps, menuContext } from './menuProps';

const Menu: React.FC<MenuProps> = props => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect,
    defaultOpenSubMenus
  } = props;
  const [curActive, setCurActive] = useState(defaultIndex);

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });
  const handleClick = (index: string) => {
    setCurActive(index);
    onSelect && onSelect(index);
  }
  const passedContext: IMenuContext = {
    index: curActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  // 操控children，指定元素类型。
  // 不能在children上直接使用map，在react文档中，children是一个不透明的数据结构，
  // 从本质上将props.children可以是任何的类型，数组，函数，对象。。。
  // https://zh-hans.reactjs.org/docs/react-api.html#reactchildren
  // react 内置的静态属性 displayName
  // ReactNode包含了很多类型
  // 想办法把某个属性汇入到实例中
  // https://zh-hans.reactjs.org/docs/react-api.html#reactchildren cloneElement()
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // return child;
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error('Warning: which is not a MenuItem component');
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <menuContext.Provider value={passedContext}>
        {renderChildren()}
      </menuContext.Provider>
    </ul>
  );
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu;
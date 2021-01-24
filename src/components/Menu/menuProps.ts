import { createContext, CSSProperties } from 'react';

// Menu FC
export type MenuMode = 'horizontal' | 'vertical';
export type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback; // 用户可能会通过回调做一些自定义操作
  defaultOpenSubMenus?: string[]
}

// Menu Content
export interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[]
}
export const menuContext = createContext<IMenuContext>({index: '0'});

// MenuItem FC
export interface MenuItemProps {
  index?: string; // 第几项，用来和defaultIndex作比较，进行高亮显示。
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

// SubMenu FC
export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}
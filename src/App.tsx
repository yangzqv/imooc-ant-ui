import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const App: React.FC = () => {
  return (
    <div className="App">
      <Icon icon="angry" />
      <div>
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => alert('你好啊！')}>Large Primary</Button>
        <Button btnType={ButtonType.Primary} disabled >Hello</Button>
        <Button btnType={ButtonType.Danger}>World</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Hello Link</Button>
      </div>
      <div>
        <br /><br />
        <Menu defaultIndex="0" mode="vertical" onSelect={(curIndex) => {console.log(curIndex)}} defaultOpenSubMenus={['3']}>
          <MenuItem>link one</MenuItem>
          <MenuItem disabled>link two</MenuItem>
          <MenuItem>link three</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Transition from './components/Transition/transition';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div>
        <Button>Hello</Button>
        <Button btnType="primary" size="lg" onClick={() => alert('你好啊！')}>Large Primary</Button>
        <Button btnType="primary" disabled >Hello</Button>
        <Button btnType="danger">World</Button>
        <Button btnType="link" href="https://www.baidu.com" disabled>Hello Link</Button>
      </div>
      <div>
        <br /><br />
        <Menu defaultIndex="0" mode="horizontal" onSelect={(curIndex) => {console.log(curIndex)}} defaultOpenSubMenus={['3']}>
          <MenuItem>link one</MenuItem>
          <MenuItem disabled>link two</MenuItem>
          <MenuItem>link three</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <br />
      <br />
      <br />
      <Button size="lg" onClick={() => setShow(!show)}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
      >
        <div>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
          <p>小红书吆，不错哦</p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
        wrapper
      >
        <Button>A Large Button</Button>
      </Transition>
    </div>
  );
}

export default App;

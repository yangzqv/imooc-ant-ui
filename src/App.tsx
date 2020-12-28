import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

const App: React.FC = () => {
  return (
    <div className="App">
      <p>
        <Button>Hello</Button>
      </p>
      <p>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => alert('你好啊！')}>Large Primary</Button>
      </p>
      <p>
        <Button btnType={ButtonType.Primary} disabled >Hello</Button>
      </p>
      <p>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Hello Link</Button>
      </p>

      <br /><br />
      <Menu defaultIndex={0} onSelect={(curIndex) => {console.log(curIndex)}}>
        <MenuItem index={0} disabled>link one</MenuItem>
        <MenuItem index={1}>link two</MenuItem>
        <MenuItem index={2}>link three</MenuItem>
      </Menu>
    </div>
  );
}

export default App;

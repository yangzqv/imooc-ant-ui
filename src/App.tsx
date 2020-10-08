import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

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
    </div>
  );
}

export default App;

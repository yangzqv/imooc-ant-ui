import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
      <Button btnType={ButtonType.Primary} disabled >Hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Hello Link</Button>
    </div>
  );
}

export default App;


## 项目
### 思考
  * 代码结构
  * 样式解决方案
  * 组件需求分析和编码
  * 测试用例分析和编码
  * 代码打包输出和发布

### 代码结构
https://zh-hans.reactjs.org/docs/faq-structure.html

### 样式解决方案

```js
  // CSS in JS
  // Styled Component
  const Button = styled.button`
    font-size: 16px;
    margin: 20px;
    color: ${props => props.isActive ? 'red' : 'white'};
  `

  <Button isActive>typescript</Button>
```

```js
  // sass/less
  // 提供了 变量，函数，运算。。。
```
## 组件
### Button
#### 需求分析
![](https://img.imgdb.cn/item/5f7dd5231cd1bbb86b7b5e8a.png)

![](https://img.imgdb.cn/item/5f7dd5b31cd1bbb86b7b7f41.png)

#### 思考
```
Q：如何通过不同的type，size显示不同的button效果？
A：
```
```
Q：对于link Button，如何实现disabled效果？
A：
```
```
Q：如何将自定义属性和原生属性结合起来？
A：高级类型：交叉类型，Partial将传入的属性变为可选项
```

## 测试
### 重要性
- 高质量的代码
- 更早的发现bug，减少成本。
- 让重构和升级变得更加容易和可靠
- 让开发流程更加敏捷

### 框架
- <a href="https://jestjs.io/zh-Hans/">Jest：项目的通用测试框架，是create-react-app的默认测试框架。</a>
- <a href="https://zh-hans.reactjs.org/docs/test-utils.html">Test Utilities：React专用测试工具，可以把React Component渲染/挂载到测试用例上。该工具方法复杂，比较难记，使用起来效果不是很好。</a>
- <a href="https://testing-library.com/docs/">React Testing Library: 对Test Utilities的封装，官方推荐。</a>
```
React Testing Library
- 理念:测试案例越贴近使用者的使用方法，测试结果就越准确。所以它的api一般都是直接通过渲染元素的内容取得的节点，而不是通过class/id。
  * data-testid
  * getByTestId
- @testing-library/react
  * render(): 将元素挂载到真实dom上。
  * RenderResult
  * beforeEach
  * fireEvent: 触发不同的用户事件。
  * cleanUp(): 在每个case结束都会自动调用cleanUp方法，清除干净。
- @testing-library/jest-dom
  * 为Jest断言库添加了更多的matchers(匹配器)，主要针对dom操作。
- @testing-library/user-event
  * userEvent
```

### 概念
- 断言：判断一个值是否对应相应/预期的一个结果，通过框架提供的api（断言库）去实现。
- case：每一个测试用例都被称为一个case，每个case都会测试一个独立的功能点。
- test(param1, param2): 用test函数可以表示一个case， param1表示用例名称，param2是一个回调函数，用来写用例的逻辑。
- it(): it和test一样，都是用来描述一个case。
- describe(): 对case进行分类。

### 地址
- https://create-react-app.dev/docs/running-tests
- https://jestjs.io/docs/zh-Hans/using-matchers
- https://github.com/facebook/create-react-app/pull/7881

### 步骤
- 设置测试属性
- case分类
- case描述
```js
  describe('case sort', () => {
    it('case describe', () => {
      // code
    })
  })
```

### 注意
#### npx create-react-app --typescript
  * 支持一个setupTests.ts文件，每当运行Jest/npm run test时就会先运行该文件。
  * setupTests.ts文件: 全局测试的通用配置文件。
  * import '@testing-library/jest-dom/extend-expect';
#### Jest将使用以下任何流行的命名约定查找测试文件
  * 文件夹中带有.js后缀的__tests__文件。
  * 带.test.js后缀的文件。
  * 带.spec.js后缀的文件。
#### 查到元素：通过元素的文本来对比是否为相应的元素
  * toBeTruthy()，判断是否正确。
  * toBeInTheDocument()，jest-dom提供的方法，判断元素是否在文档中。
#### 目前开发的痛点
  * create-react-app入口文件不适合管理组件库
  * 缺少行为追踪和属性调试功能
#### 完美组件开发工具应有的特点
  * 地址：https://storybook.js.org/
  * 分开展示各个组件不同属性下的状态
  * 能追踪组件的行为并且具有属性调试功能
  * 可以为组件自动生成文档和属性列表
  * 安装：npx -p @storybook/cli sb init
  * 指定版本：npx -p @storybook/cli@5.2.8 sb init
#### 如何让storybook完美支持typescript？

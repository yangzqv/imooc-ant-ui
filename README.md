
# Button 组件需求分析

<img src="https://pic.downk.cc/item/5f7dd5231cd1bbb86b7b5e8a.png">

<img src="https://pic.downk.cc/item/5f7dd5b31cd1bbb86b7b7f41.png">

# 数据传递

透传属性的好帮手：context

用户点击item：一是当前的active发生变化，二是用户可能会做一些自定义的操作。

# 测试
## 国内互联网测试现状
- 重视程度严重不足
- 没有时间
- 不会写测试

## 测试的重要性
- 高质量的代码
- 更早的发现bug，减少成本。
- 让重构和升级变得更加容易和可靠
- 让开发流程更加敏捷

## React组件特别适合单元测试
 - Component
 - Function
 - 单向数据流

## 相关概念
- 断言：判断一个值是否对应相应/预期的一个结果。
- case：每一个测试用例都被称为一个case，每个case都会测试一个独立的功能点。
  * test(param1, param2): 用test函数可以表示一个case， param1表示用例名称，param2是一个回调函数，用来写用例的逻辑。
  * it(): it和test一样，都是用来描述一个case。
  * Jest断言库: Jest提供的Api
  * describe(): 对case进行分类。
  * jest.fn(): 捕获函数是否被调用，即创建一个被监控的模拟函数。

## 测试框架
- Jest：项目的通用测试框架，是create-react-app的默认测试框架。
- Test Utilities
  * 概念：React专用测试工具，可以把React Component渲染/挂载到测试用例上。该工具方法复杂，比较难记，使用起来效果不是很好。
  * React Testing Library: 对Test Utilities的封装，官方推荐。
  * Enzyme

## React Testing Library
- @testing-library/react
  * render(): 将元素挂载到真实dom上。
  * fireEvent(): 触发不同的用户事件。
- @testing-library/jest-dom
  * 为Jest断言库添加了更多的matchers(匹配器)，主要针对dom操作。

## test步骤
- 设置测试属性
- case分类
- case描述
```javascript
  describe('case sort', () => {
    it('case describe', () => {
      // code
    })
  })
```

## 注意
- npx create-react-app --typescript
  * 支持一个setupTests.ts文件，每当运行Jest/npm run test时就会先运行该文件。
  * setupTests.ts文件: 全局测试的通用配置文件。
  * import '@testing-library/jest-dom/extend-expect';
- Jest将使用以下任何流行的命名约定查找测试文件
  * 文件夹中带有.js后缀的__tests__文件。
  * 带.test.js后缀的文件。
  * 带.spec.js后缀的文件。
- 查到元素：通过元素的文本来对比是否为相应的元素
  * toBeTruthy()，判断是否正确。
  * toBeInTheDocument()，jest-dom提供的方法，判断元素是否在文档中。

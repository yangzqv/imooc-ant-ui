import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button, { ButtonProps } from './button';

const defaultProps = {
  // 捕获函数是否被调用，即创建一个被监控的模拟函数
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'nice'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button Component', () => {
  it ('should render the current default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    userEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it ('should render the current component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn btn-primary btn-lg nice');
  });
  it ('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType="link" href="www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it ('should render disabled button when disabled to set true', () => {
    const wrapper = render(<Button {...disabledProps}>Link</Button>);
    const element = wrapper.getByText('Link') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    userEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
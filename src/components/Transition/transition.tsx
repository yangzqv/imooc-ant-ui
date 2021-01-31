import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';
type TransitionProps =  CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
}
// 注意：css样式中的transition属性不会被继承

const Transition: React.FC<TransitionProps> = props => {
  const {
    children,
    className,
    animation,
    wrapper,
    ...restProps
  } = props;

  return (
    <CSSTransition
      classNames = { className ? className : animation }
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}
export default Transition;

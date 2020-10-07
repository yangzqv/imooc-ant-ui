import React from 'react';
import classNames from 'classnames';

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export enum ButtonSize {
  Normal = 'nl',
  Small = 'sm',
  Large = 'lg',
}

interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<BaseButtonProps> = props => {
  const {
    btnType,
    size,
    disabled,
    href,
    children
  } = props;

  // btn, btn-lg, btn-primary
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled && btnType === ButtonType.Link,
  })

  if (href && btnType === ButtonType.Link) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
  size: ButtonSize.Normal,
}

export default Button;


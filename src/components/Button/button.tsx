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

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = props => {
  const {
    btnType,
    size,
    disabled,
    href,
    children,
    className,
    ...restProps
  } = props;

  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled && btnType === ButtonType.Link,
  })

  if (href && btnType === ButtonType.Link) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
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


import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps } from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color', description: 'set button background color'  },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  btnType: 'default',
  disabled: false,
  children: 'Default',
  onClick: action('defaultButton'),
}

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  children: 'Primary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large'
}

export const Link = Template.bind({});
Link.args = {
  size: 'sm',
  children: 'Link',
  btnType: 'link',
  disabled: true
}
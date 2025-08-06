/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/preact';
import { MyUiComponent as component, MyUiComponentProps } from '@/acheckout/components/MyUiComponent';

/**
 * Use MyUiComponents to [replace this text with components purpose].
 */
const meta: Meta<MyUiComponentProps> = {
  title: 'Components/MyUiComponent',
  component,
  argTypes: {
    children: {
      description: 'Add text to the MyUiComponent.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'MyUiComponent defaultValue for children.' },
      },
    },
    onClick: {
      description: 'Add a click handler.',
      table: {
        type: { summary: 'function' },
      },
      action: 'onClick',
    },
  },
};

export default meta;

type Story = StoryObj<MyUiComponentProps>;

/**
 * <MyUiComponent>👋 Hello from your new MyUiComponent story!</MyUiComponent>
 */
export const MyUiComponent: Story = {
  args: {
    children: "👋 Hello from your new MyUiComponent story!",
  },
};

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
import { MyContainer as component, MyContainerProps } from '@/acheckout/containers/MyContainer';

const meta: Meta<MyContainerProps> = {
  title: 'Containers/MyContainer',
  component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // centered | fullscreen
  },
};

export default meta;

type Story = StoryObj<MyContainerProps>;

/**
 * ```ts
 * import { MyContainer } from '@/acheckout/containers/MyContainer';
 * ```
 */

export const MyContainer: Story = {
  args: {
    children: "👋 Howdy, I'm Howdy!",
  },
};

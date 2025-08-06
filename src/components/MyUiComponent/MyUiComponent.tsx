/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this
 * file in accordance with the terms of the Adobe license agreement
 * accompanying it.
 *******************************************************************/

import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';
import { classes } from '@adobe-commerce/elsie/lib';
import '@/acheckout/components/MyUiComponent/MyUiComponent.css';
// Dropin Components
import { Button, Tag } from '@dropins/tools/components.js';

export interface MyUiComponentProps extends HTMLAttributes<HTMLDivElement> {}

export const MyUiComponent: FunctionComponent<MyUiComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classes(['acheckout-my-ui-component', className])}
    >
      <Button>Click Me</Button>
      <Tag label="Tag Example" />
      {children}
    </div>
  );
};

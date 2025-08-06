/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this
 * file in accordance with the terms of the Adobe license agreement
 * accompanying it.
 *******************************************************************/

import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import MyUiComponent from '@/acheckout/components/MyUiComponent';

export interface MyContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const MyContainer: Container<MyContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
      <MyUiComponent>This is from Drop-in component</MyUiComponent>
    </div>
  );
};

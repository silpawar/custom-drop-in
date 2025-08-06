/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
/** https://preactjs.com/guide/v10/preact-testing-library/ */

import { render } from '@adobe-commerce/elsie/lib/tests';

import { MyContainer } from '@/acheckout/containers/MyContainer';

describe('ACheckout/Containers/MyContainer', () => {
  test('renders', () => {
    const { container } = render(<MyContainer />);

    expect(!!container).toEqual(true);
  });
});

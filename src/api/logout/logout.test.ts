/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { logout } from '@/acheckout/api/logout';

describe('ACheckout/api/logout', () => {
  test('returns value', () => {
    const value = logout();

    expect(value).toEqual('Howdy!');
  });
});

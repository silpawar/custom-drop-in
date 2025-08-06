/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { login } from '@/acheckout/api/login';

describe('ACheckout/api/login', () => {
  test('returns value', () => {
    const value = login();

    expect(value).toEqual('Howdy!');
  });
});

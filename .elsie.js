/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/

module.exports = {
  name: 'ACheckout',
  api: {
    root: './src/api',
    importAliasRoot: '@/acheckout/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/acheckout/components',
      cssPrefix: 'acheckout',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/acheckout/containers',
  },
  schema: {
    endpoint: process.env.ENDPOINT,
    headers: {}
  }
};

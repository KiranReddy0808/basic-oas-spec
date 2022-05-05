import { createRulesetFunction } from '@stoplight/spectral-core';

export default createRulesetFunction<unknown, null>(
  {
    input: null,
  },
  function print(input) {
    if (input) {
      console.log(input);
      return [];
    }
    return [];
  },
);

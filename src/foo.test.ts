import { describe, expect, it } from 'test'

import { foo } from './foo'

describe('foo', () => {
  it('should multiply by two', () => {
    expect(foo(5)).toEqual(10)
  })
})

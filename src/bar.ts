import { expect } from 'test'

import {
  baz,
  SomeLongConstantName,
  SomeLongConstantName2,
  SomeLongConstantName3,
  SomeLongConstantName4,
  SomeLongConstantName5,
} from './baz'
import { far, foo } from './foo'

export function bar(n: number): number {
  expect(n)
  return (
    foo(n) +
    baz(n) +
    far(n) +
    SomeLongConstantName +
    SomeLongConstantName2 +
    SomeLongConstantName3 +
    SomeLongConstantName4 +
    SomeLongConstantName5
  )
}

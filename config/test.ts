export type Describe = (what: string, callback: () => void) => void

export type It = (should: string, callback: () => void) => void

export interface Matcher {
  toBe(value: any): void
  toEqual(value: any): void
}

export type Expect = (value: any) => Matcher

declare var describe: any
declare var it: any
declare var expect: any

const theDescribe = describe as Describe
const theIt = it as It
const theExpect = expect as Expect

export { theDescribe as describe, theIt as it, theExpect as expect }

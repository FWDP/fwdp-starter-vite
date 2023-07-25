import { describe , it, expect, test} from "vitest";

describe("test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("should fail", () => {
    let a = 1, b = 2;

    expect(a+b).toBe(3);
  });

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }
  const output = JSON.stringify(input)
  expect(output).eq('{"foo":"hello","bar":"world"}')
})
  it('foo', () => {
    expect(Math.sqrt(4)).toBe(2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })
})


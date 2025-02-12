import { sum } from './math';

describe('math.js', () => {
  test('sum 10 and 20', () => {
    const result = sum(10, 20);
    expect(result).not.toBe(20);
  });
});

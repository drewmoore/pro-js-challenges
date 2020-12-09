const {
  appendObject,
  appendObjectImmutable,
  getNestedImmutable,
  idsAsKeys,
  isGreaterThanZero,
  multiplyAllArrayElements,
  getNumberedList,
  getAggregatedApiResults
} = require('../src/app');

describe('Pro JS', () => {
  // Example use case: state management in Redux/Vuex, etc.
  describe("Use 'Object.assign'", () => {
    it('appends one object to another', () => {
      const base = { a: 1 };
      const extra = { b: 2 };
      const expected = { a: 1, b: 2 };

      expect(appendObject(base, extra)).toEqual(expected);
    });

    it('appends one object to another and returns an immutable copy', () => {
      const base = { a: 1 };
      const extra = { b: 2 };
      const expected = { a: 1, b: 2 };

      expect(appendObjectImmutable(base, extra)).toEqual(expected);
      expect(base).toEqual({ a: 1 });
    });
  });

  describe("Use 'reduce'", () => {
    // Example use case: structuring frontend state data in a way that makes life easier
    it('converts an array of objects to one big object', () => {
      const array = [{ id: 1, name: 'Redwood' }, { id: 2, name: 'Birch' }];
      const expected = {
        1: {
          id: 1,
          name: 'Redwood'
        },
        2: {
          id: 2,
          name: 'Birch'
        }
      };

      expect(idsAsKeys(array)).toEqual(expected);
    });

    // This demonstrates why tools such as immer.js are so popular...
    it('returns a deeply immutable copy of an object with a nested object', () => {
      const nested = { c: 1 };
      const base = { a: 1, nested };
      const result = getNestedImmutable(base);
      const expected = { a: 1, nested: { c: 1 } };

      expect(result).toEqual(expected);
      // Doesn't use jest's toEqual due to this function not using a strict check. Instead, using === for comparison
      // checks if two sides of an expression are the same object in memory.
      expect(nested === result.nested).toBe(false);
    });

    it('returns false for an array with a negative value', () => {
      const array = [1, 2, -1];
      expect(isGreaterThanZero(array)).toBe(false)
    });

    it('returns true for an array without a negative value', () => {
      const array = [1, 2, 3];
      expect(isGreaterThanZero(array)).toBe(true)
    });

    it('returns a mathematical result', () => {
      const array = [1, 2, 3, 4];
      expect(multiplyAllArrayElements(array)).toEqual(24)
    });

    it('returns a string value', () => {
      const array = ['hello', 'here', 'is', 'a', 'numbered', 'list', 'of', 'words'];
      expect(getNumberedList(array)).toEqual(' 1: hello 2: here 3: is 4: a 5: numbered 6: list 7: of 8: words');
    });

    // Example use case: you need to do something with the results of multiple API calls
    it('chains promises', async () => {
      const array = [1, 2, 3, 4];
      const result = await getAggregatedApiResults(array);
      // The function should add the results of an API, ignoring errors.
      expect(result).toEqual(14);
    });
  });
});

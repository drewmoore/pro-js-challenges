const {
  appendObject,
  appendObjectImmutable,
  getNestedImmutable,
  idsAsKeys,
  isGreaterThanZero
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

    // This shows why tools such as immer.js are so popular...
    it('returns a deeply immutable copy of an object with a nested object', () => {
      const nestedBase = { c: 1 };
      const base = { a: 1, b: nestedBase };
      const expected = { a: 1, b: { c: 1 } };
      const result = getNestedImmutable(base);

      expect(result).toEqual(expected);
      // Doesn't use jest's toEqual due to this function not using a strict check. Instead, using === for comparison
      // checks if two sides of an expression are the same object in memory.
      expect(nestedBase === result.b).toBe(false);
    });

    it('returns false for an array with a negative value', () => {
      const array = [1, 2, -1];
      expect(isGreaterThanZero(array)).toBe(false)
    });

    it('returns true for an array without a negative value', () => {
      const array = [1, 2, 3];
      expect(isGreaterThanZero(array)).toBe(true)
    });
  });
});

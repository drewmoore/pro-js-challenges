// Use 'Object.assign' here. This should be a one-liner.
const appendObject = () => {};

// Use 'Object.assign' here. This should be a one-liner.
const appendObjectImmutable = () => {};

// Use 'reduce' here. Also, it is possible to do this in just one line...
const idsAsKeys = () => {};

// Combine 'Object.assign' and 'reduce'. Not a likely one-liner. The challenge here is to also write this function in
// a way so that it doesn't know which properties of the argument object are objects themselves. It could be used for
// any object.
const getNestedImmutable = () => {};

// 'reduce' has so many uses, not just returning objects. Think about the starting value that you provide
// to the reducer...
const isGreaterThanZero = () => {};

// 'reduce' can also do math...
const multiplyAllArrayElements = () => {}

// 'reduce' can also build strings...
const getNumberedList = () => {}

// Here's a simplified mock of an API endpoint that avoids needing to use an HTTP library, mock it, etc. This just
// takes a number and multiplies it by two and wraps the result in a promise. It really doesn't like certain numbers,
// though, so you will need to handle this error in your implementation.
const callFakeMultiplicationApi = (number) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number === 3) return reject(new Error("Oops, I don't like that number"))
      resolve(number * 2);
    }, 1);
  })
);

// This one's a bit tricky. You will need to make the API calls in sequence and add the results. Error responses
// need to be ignored, so you can't use Promise.all. Use 'reduce' here for practice. This isn't the only possible
// implementation, but it will make you a 'reduce'-champ.
const getAggregatedApiResults = async () => {
  // Use the provided 'callFakeMultiplicationApi' function, which returns a promise that resolves with an integer.
};

module.exports = {
  appendObject,
  appendObjectImmutable,
  idsAsKeys,
  getNestedImmutable,
  isGreaterThanZero,
  multiplyAllArrayElements,
  getNumberedList,
  getAggregatedApiResults
};

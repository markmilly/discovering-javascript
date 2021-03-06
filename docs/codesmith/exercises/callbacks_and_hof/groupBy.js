/*
Create a function groupBy that accepts an array and a callback, and 
returns an object. groupBy will iterate through the array and perform 
the callback on each element. Each return value from the callback will 
be saved as a key on the object. The value associated with each key will 
be an array consisting of all the elements that resulted in that return 
value when passed into the callback.
*/

// ADD CODE HERE
function groupBy(arr, callback) {
  const obj = arr.reduce((acc, element) => {
    const fl = callback(element);
    if (!acc.hasOwnProperty(fl)) {
      acc[fl] = [];
    }
    acc[fl].push(element);
    return acc;
  }, {});
  return obj;
}
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Attempt 2

// input: array, callback
// output: object
function groupBy(array, callback) {
  return array.reduce((accumulator, currentValue) => {
    const result = callback(currentValue);
    accumulator.hasOwnProperty(result)
      ? accumulator[result].push(currentValue)
      : (accumulator[result] = [currentValue]);
    return accumulator;
  }, {});
}
// iterate over array
// invoke callback on each element
// object key will be the returned value from invoking the callback
// object value will be an array consisting of elements

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

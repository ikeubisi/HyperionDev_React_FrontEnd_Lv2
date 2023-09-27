const lodash = require("lodash");

const myNumArr = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

// Array unchanged but output via lodash
/*
LodashWrapper {
  __wrapped__: [
    1,  2,  10, 100,   10,
    2,  5,   6,  10, 1000,
    7,  2, 100,   1,    5,
    7, 10
  ],
  __actions__: [],
  __chain__: false,
  __index__: 0,
  __values__: undefined
}
*/
// console.log(lodash(myNumArr));

// Array with duplicates removed but still in the same order
/*
[
  1, 2,   10, 100,
  5, 6, 1000,   7
]
*/
// _.uniq() method used instead of _.uniqby() since the task didn't require a greater the added complexity of
// having an iteratee supplied
// research for _.uniqby() learned from
// Lodash _.uniqby() method (2021) GeeksforGeeks.
// Available at: https://www.geeksforgeeks.org/lodash-_-uniqby-method/ (Accessed: 27 September 2023).
console.log(lodash.uniq(myNumArr));

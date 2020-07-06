//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
var generate = function(numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;
    triangle[i][i] = 1;

    if (i > 1) {
      for (let j = 1; j < triangle[i].length - 1; j++) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  return triangle;
};
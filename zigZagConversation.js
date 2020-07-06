/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let matrix = Array.from(Array(numRows), () => []);
  let row = 0;
  let column = 0;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    matrix[row][column] = s[i];
    row++;
    if (row === numRows) {
      row--;
      while (row !== 0) {
        column++;
        row--;
        i++;
        matrix[row][column] = s[i];
      }
      i--;
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === undefined) {
        continue;
      }
      result += matrix[i][j];
    }
  }

  return result;
};
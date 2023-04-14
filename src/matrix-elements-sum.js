const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix =  [].concat(...matrix);
    var sum = 0;
       for (let i = 0; i < matrix.length; i++) {
         if (matrix[i]===0 && matrix[i+1]===0) {
           matrix = matrix.slice(0, matrix.length-i)
           break;
         }
       else if (matrix[matrix.length-2] === 0) {
           matrix = matrix.slice(0, matrix.length-2)
           
         }
         
        sum += matrix[i]    
      }
  console.log(matrix) 
   return sum;
  }
  
  console.log(getMatrixElementsSum([  [1],
        [5],
        [0],
        [2] ]))
  

module.exports = {
  getMatrixElementsSum
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixNew = Array.from(matrix).slice(0, matrix.length-i)
    for( var i =0; i < matrix.length; i++){
        var inner=[];
        matrixNew.push(inner);
    for(var j = 0; j < matrix[i].length; j++){
            let mines=0;
    if(matrix[i] && matrix[i][j] && i < matrix.length-2) mines++; 
    if(matrix[i] && matrix[i][j-1]) mines++;
    if(matrix[i] && matrix[i][j+1]) mines++;
    if(matrix[i-1] && matrix[i-1][j]) mines++;
    if(matrix[i+1] && matrix[i+1][j]) mines++; 
  if(i > 0 && j > 0 && matrix[i-1][j-1]) mines++;
  if(j > 0 && i < matrix.length-1 && matrix[i+1][j-1]) mines++;
  if(i > 0 && j <= matrix[0].length-1 && matrix[i-1][j+1]) mines++;
      
    inner.push(mines);
        }
    }
    return matrixNew;
    }
    
    console.log(minesweeper([
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ]))
  
  

module.exports = {
  minesweeper
};

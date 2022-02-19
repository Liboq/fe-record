/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 逆时针旋转
// 先水平翻转，再延对角线翻转
 var rotate = function(matrix) {    
  let length = matrix.length;
  let m = matrix[0].length;
  for (var j = 0; j < length; j++) {
    for (let i = 0; i < m/2; i++) {
    let tmp=matrix[j][i]
    matrix[j][i]=matrix[j][m-1-i];
    matrix[j][m-1-i]=tmp
    }
  }
  console.log(matrix)
  // for (let i = 0; i < length/2; i++) {
  //   let tmp = matrix[i]
  //    matrix[i]=matrix[length-1-i]
  //    matrix[length-1-i]=tmp
  // }
  for (let i = 0; i < length; i++) {
     for(let j= i+1;j <length;j++){
       let tmp = matrix[i][j]
       matrix[i][j]=matrix[j][i]
       matrix[j][i]=tmp
     }
  }

  console.log(matrix);
  /*  [ 11, 10, 7, 16 ],
  [ 9, 8, 6, 12 ],
  [ 1, 4, 3, 14 ],
  [ 5, 2, 13, 15 ] */
};
let matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
rotate(matrix)



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 顺时针旋转
// 先上下翻转，再水平翻转
 var rotate = function(matrix) {    
  let length = matrix.length;
  for (let i = 0; i < length/2; i++) {
    let tmp = matrix[i]
     matrix[i]=matrix[length-1-i]
     matrix[length-1-i]=tmp
  }
  for (let i = 0; i < length; i++) {
     for(let j= i+1;j <length;j++){
       let tmp = matrix[i][j]
       matrix[i][j]=matrix[j][i]
       matrix[j][i]=tmp
     }
  }
  console.log(matrix);
  /* [
  [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ]
] */
};
let matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
rotate(matrix)



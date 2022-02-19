/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// 首先，对角线遍历，x+y是固定值，每一个对角线上的和是一样的
// 奇数是反向遍历,偶数是正向遍历
// 细节在于起始值和行列限制
 var findDiagonalOrder = function(mat) {
  let a =[];
  let rowLength = mat.length-1;
  let colLength = mat[0].length-1;
  let k =0 ;
  let l =0;
  for (let i = 0; i <= rowLength+colLength; i++) {
    if(i%2==0){
      for (let j = k; j >= i-l; j--) {
      a.push(mat[j][i-j])
      }
    }else{
      for (let j = l; j >=i-k ; j--) {
         a.push(mat[i-j][j])
      }
    }
    k=k>rowLength?rowLength:k+1;
    l=l>colLength?colLength:l+1
    
  }
};
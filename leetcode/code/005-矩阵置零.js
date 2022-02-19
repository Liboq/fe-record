/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/* 利用额外空间进行解题，首先双层循环遍历，记录下元素为0的位置i，j，分别存储到数组r和l中，再次双层循环遍历，判断数组r,l中存在那些数与i和j相同，相同则将相应元素置0. */
 var setZeroes = function(matrix) {
    const f=[];
    const b =[];
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j <matrix[0].length ; j++) {
          if(matrix[i][j]==0){
              f.push(i);
              b.push(j);
          }
       }
       

    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <matrix[0].length ; j++) {
           if((f.indexOf(i)!=-1)||(b.indexOf(j)!=-1)){
               matrix[i][j]=0
           }
        }
        
 
     }
};
/**
 * @param {number} n
 * @return {number[][]}
 * 链接：https://leetcode.cn/problems/spiral-matrix-ii/
 */
 var generateMatrix = function(n) {
    let arr=Array.from(new Array(n),()=>new Array(n).fill(0));//这里可以初始化数组为[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]样式
    let left=0;
    let right =n-1;
    let top = 0;
    let bottom = n-1;
    let direction = 'right';
    let temp =1
   
    while(left<=right&&top<=bottom){
        if(direction==='right'){
            for (let i = left; i <=right; i++) {
               arr[top][i]= temp;
               temp++;
               
            }
            top++;
            direction='bottom'
            console.log(arr[0][1]);
        }else if(direction==='bottom'){
            for (let i = top; i <= bottom; i++) {
                arr[i][right]= temp;
                temp++;
             }
             right--;
            direction='left'
        }else if(direction==='left'){
            for (let i = right; i >=left; i--) {
                arr[bottom][i]= temp;
                temp++;
             }
             bottom--;
            direction='top'
        }else if(direction==='top'){
            for (let i =bottom ; i >=top; i--) {
                arr[i][left]= temp;
                temp++;
             }
             left++;
            direction='right'
        }
    }
    return arr
};
generateMatrix(3)

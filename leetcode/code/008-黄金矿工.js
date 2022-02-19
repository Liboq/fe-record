/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let m = grid.length;//行的数量
    let n = grid[0].length;//列的数量
    let maxSum = 0;
    let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];//方向
    const dfs=(i,j,count)=>{
        count +=grid[i][j];
        maxSum = Math.max(maxSum,count);
        let rec = grid[i][j];
        grid[i][j]=0;
        for(let dir of directions){
            let newI = i+dir[0];
            let newJ = j+dir[1];
            if(newI<0||newJ<0||newI>=m||newJ>=n||grid[newI][newJ]===0) continue;
            dfs(newI,newJ,count)
        }
        grid[i][j]=rec;

    }
    // 出发位置随机，但是只能从非0的位置进入
    for (let i = 0; i < m; i++) {
       for(let j=0;j<n;j++){
           if(grid[i][j]!==0){
               dfs(i,j,0)
           }
       }
    }
    console.log(maxSum);
    return maxSum;

};
let grid = [[0,6,0],[5,8,7],[0,9,0]]
getMaximumGold(grid)
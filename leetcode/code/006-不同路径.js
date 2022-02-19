/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(grid) {
    //  行的数量：m,列的数量：n
    const m =grid.length,n=grid[0].length;
    let count = 0,i0=-1,j0=-1,ret=0;
    for (let i = 0; i < m; i++) {
        for(let j =0;j<n;j++){
            if(grid[i][j]==-1) ++count;//计算出故障的数量
            else if(grid[i][j]===1) [i0,j0]=[i,j]//记录起点的位置
        }
    }
    count = m*n-count //算出除去故障其他格子的数量
    const backtrack = (step,r,c) =>{
        // 索引不合法或者该位置不能走
        
        if(r<0||r>=m||c<0||c>=n||grid[r][c]===1 && step!=1 || grid[r][c]===-1||grid[r][c]===2&&step<count)return //索引不合法 
        else if(step ===count ){
            ++ret;return 
        }
        grid[r][c] = -1;
        backtrack(step+1,r,c+1);
        backtrack(step+1,r+1,c);
        backtrack(step+1,r,c-1);
        backtrack(step+1,r-1,c)
        grid[r][c]=0
    }
    backtrack(1,i0,j0)
    return ret
};
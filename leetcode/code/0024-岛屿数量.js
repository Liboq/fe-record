/**
 * https://leetcode.cn/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    const ylen = grid.length // 行数
    if (ylen === 0) return 0 // 如果 grid 为空，返回 0
    const xlen = grid[0].length // 列数
    // 定义了一个深度优先搜索（DFS）函数 dfs，用于从给定位置 (i, j) 开始进行深度优先搜索，并将与之相连的陆地标记为已访问过的水域。在DFS函数中，首先进行边界条件的判断，然后将当前位置标记为已访问过的水域，然后递归地对当前位置的上、下、左、右四个方向进行搜索。
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= ylen || j >= xlen || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }
    // 在外部的两层循环中，遍历整个网格地图。对于每个位置 (i, j)，如果该位置是陆地（值为 '1'），则将岛屿数量 count 加一，并以该位置为起点调用DFS函数进行搜索，将与该位置相连的所有陆地标记为已访问过的水域
    for (let i = 0; i < ylen; i++) {
        for (let j = 0; j < xlen; j++) {
            if (grid[i][j] === "1") {
                count++
                dfs(i, j)
            }
        }
    }
    return count
};

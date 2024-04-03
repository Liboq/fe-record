/**
 * https://leetcode.cn/problems/ZL6zAn/
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let ylen = grid.length
    if (ylen === 0) return 0
    let xlen = grid[0].length
    let max = 0
    // 定义了一个深度优先搜索（DFS）函数 dfs，用于从给定位置 (i, j) 开始进行深度优先搜索，并返回当前位置所能够探索的岛屿的面积。在DFS函数中，首先进行边界条件的判断，然后将当前位置标记为已访问过的水域（值为 0），然后递归地对当前位置的上、下、左、右四个方向进行搜索，并累加岛屿的面积。
    const dfs = (i, j) => {
        let count = 0
        if (i < 0 || j < 0 || grid[i][j] === "0" || i >= xlen || j >= ylen) {
            return count
        }
        count += dfs[i, j + 1]
        count += dfs[i, j - 1]
        count += dfs[i - 1, j]
        count += dfs[i + 1, j]
        return count
    }
    // 在外部的两层循环中，遍历整个网格地图。对于每个位置 (i, j)，如果该位置是陆地（值为 1），则以该位置为起点调用DFS函数进行搜索，并更新最大岛屿的面积 max。
    for (let i = 0; i < xlen; i++) {
        for (let j = 0; j < ylen; j++) {
            if (grid[i][j] === "1") {
                max = Math.max(max, dfs(i, j))
            }
        }
    }
    return max
};
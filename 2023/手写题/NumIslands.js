// leetcode 200
// 岛屿问题
const numIslands = (grid) => {
  const moveX = [0, 1, 0, - 1]
  const moveY = [1, 0, - 1, 0]
  if (grid.length === 0 || grid[0].length === 0) return 0

  // 初始化岛屿数量
  let count = 0;
  let row = grid.length
  let column = grid[0].length
  const dfs = (i, j) => {

    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") return
    grid[i][j] = "0"
    for (let k = 0; k < 4; k++) {
      dfs(i + moveX[k], j + moveY[k])
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === "1") {
        count++
        dfs(i, j)
      }
    }
  }
  return count
}
// test NumIslands.jsNumIslands.js
const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "1"],
];
console.log(numIslands(grid));
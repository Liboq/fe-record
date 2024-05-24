// 快速排序使用分治策略来把一个串行(list)分为两个子串行(sub-lists)。具体算法步骤如下:
// 从数列中挑出一个元素,称为 “基准”(pivot)
// 重新排序数列,所有元素比基准值小的摆放在基准前面,所有元素比基准值大的摆在基准的后面(相同的数可以到任一边)。在这个分区退出之后,该基准就处于数列的中间位置。这个称为分区(partition)操作。
// 递归地(recursive)把小于基准值元素的子数列和大于基准值元素的子数列排序。
// ————————————————

// 原文链接：https://blog.csdn.net/qq_41152573/article/details/135403943
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        // 例如 [5,2,6,1,7]
        // 获取基准值索引
        // arr => [2,1,5,6,7] index 2
        let index = partition(arr, left, right)
        // 基准值左边排序 [2,1]
        quickSort(arr, left, index - 1)
        // 基准值右边排序 [6,7]
        quickSort(arr, index + 1, right)
    }

}
// 实现 分区 返回 index
const partition = (arr, left, right) => {
    // 定义 最左为基准值 随意 
    let temp = arr[left]
    while (right >= left) {
        // 如果 左边的值小于基准值 不需要移动 则left++
        while (arr[left] < temp) {
            left++
        }
        // 如果 右边的值大于基准值 不需要移动 则right--
        while (arr[right] > temp) {
            right--
        }
        // 到这里说明两边的值都不符合 上述条件 交换位置
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    // 中间位置 就是 基准值位置 返回
    return left
}

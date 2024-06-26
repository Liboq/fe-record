// 冒泡排序的详细步骤是:

// 从数组开头开始,比较相邻的两个元素,如果顺序是反的(第一个比第二个大),则交换它们的位置。
// 对每一对相邻元素都进行同样的工作,从开始第一对到结尾的最后一对。这步做完后,最后的元素会是最大的数。
// 针对所有的元素重复以上的步骤,除了最后一个。
// 持续每次对越来越少的元素重复上面的步骤,直到没有任何一对数字需要比较。
// 原文链接：https://blog.csdn.net/qq_41152573/article/details/135403943
let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log(j);
            // 例如 [5,1,4,2,3] 第一次循环 i = 0 j = 0, 5 > 1 交换位置 arr=>[1,5,4,2,3]
            // 第二次循环 i = 0 j = 1, 5 > 4 交换位置 arr=>[1,4,5,2,3]
            // 第三次循环 i = 0 j = 2, 5 > 2 交换位置 arr=>[1,4,2,5,3]
            // 第四次循环 i = 0 j = 3, 5 > 3 交换位置 arr=>[1,4,2,3,5]  
            // 每次循环结束 都会将最大的数放到最后一位
            // 如果左边大于右边 交换位置
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([5, 1, 4, 2, 3])
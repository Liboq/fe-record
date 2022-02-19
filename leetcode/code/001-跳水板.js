/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]} 
 */
var divingBoard = function (shorter, longer, k) {
    let arr = [];
    let sum = 0;
    if (k <= 0) {
        
        return arr;
    }
    if (shorter === longer) {
        arr.push(shorter * k);
        return arr;
    }
    for (let i = 0; i <= k; i++) {
        sum = shorter * (k - i) + longer * i;
        arr.push(sum);
    }
    return console.log(arr);

};
divingBoard(2,1118596,979);
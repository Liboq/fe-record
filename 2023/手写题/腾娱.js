const suanshu = (flag, index, result, num) => {
    const pre = num[index] === null ? result : +num[index]
    const next = num[index + 1] === null ? result : +num[index + 1]

    switch (flag) {
        case '+': return pre + next;
        case '-': return pre - next;
        case '*': return pre * next;
        case '/': if (next === 0) throw new Error('除数不能为0');
            return pre / next;
        default: return 0;
    }
}
const calculate = (str) => {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const num = str.match(/\d+(\.\d+)?/g)
    const flag = str.match(/[+*/-]/g)
    const flagSortArr = flag.map((item, index) => ({
        name: item,
        sortIndex: index
    })
    ).sort((a, b) =>
        precedence[b.name] - precedence[a.name]
    )
    let result = 0
    const clear = (index1) => {
        flag[index1] = null
        num[index1] = null
        num[index1 + 1] = null
    }
    for (flagItem of flagSortArr) {
        result = suanshu(flagItem.name, flagItem.sortIndex, result, num)
        clear(flagItem.sortIndex)
    }
    return result
}
const teststr = "10 - 20 * 30 / 10 +10 -0.5"
console.log(calculate(teststr))//-40

// 题目: 判断字符串是否符合XXX-XXX-XXXX(X为数字), 返回Boolean值

// 例如 :

// '110-110-1100' 返回 true,

// '11a-11b-110c' 返回 false

// '123-1-2' 返回 false
const matchingStr = (str) => {
    const reg = /(\d{3}-)(\d{3}-)(\d{4})/
    return reg.test(str)
}


console.log(matchingStr("110-110-1100"));
/**
 * @param {string} S
 * @return {string[]}
 */
 var permutation = function(S) {
    let m = S.length;
    const arr =[]
    function dfs(i,temp){
        if(i===m){
            return arr.push(temp)
        }
        temp+S[i]
    }
    
};
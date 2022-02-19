/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    const ans = [],n=s.length;
    function dfs(i,tmp){
        if(i==s.length) return ans.push(tmp);
        if(isNaN(s[i])) {
            dfs(i+1,tmp+s[i].toLowerCase());
            dfs(i+1,tmp+s[i].toUpperCase());
        }else{
            dfs(i+1,tmp+s[i])
        }

    }
    dfs(0,'')
   
    return ans
};

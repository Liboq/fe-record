/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let len =s.length;
  let res= '';
  for (let i = 0; i < len; i++) {
    let left = i;
    let right = i;
    while(left>=0&&right<=len&&s[right]==s[left]){
      right++;
    }
    while(left>=0&&right<=len&&s[right]==s[left-1]){
      right++;
      left--;
    }
    if(right-left>res.length){
      res = s.substring(left,right);
      console.log(res);
    }
    
    
    
     
  }
 
  return res
};
longestPalindrome("babad")
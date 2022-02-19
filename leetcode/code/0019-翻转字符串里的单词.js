/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {

   let res= s.trim().split(' ').reverse();
   res=res.filter(item=>item!=''
    )
   console.log(res);
   return  res.join(' ')
};
s = "a good    example"
reverseWords(s)


// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
//  var longestCommonPrefix = function(strs) {
   
//   if(strs.length===1){
//     return strs.join('')
//   }
//   let arr1=strs.reduce((total,temp,index)=>{
//       if(index ==0){
//         return strs[0]
//       }
//       let arr=[]
//       length = total.length>temp.length?temp.length:total.length
//       for(let i =0;i<length;i++){
//           if(total[i]==temp[i]){
//               arr.push(total[i]);   
//           }else{
//               break
//           }
//       }
//       return arr
//   },[])
  
//   if(arr1==[]){
//     return ""
//   }else{
 
//     return arr1.join("")
//   }
  
  
// };

// 还有一种arr.every的写法 简便 
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  var s = '';
  for (var i = 0;i < strs[0].length;i++) {
      if (strs.every(_ => strs[0][i] === _[i])) {
          s = s + strs[0][i];
      } else {
          break;
      }
  }

  return s;
};


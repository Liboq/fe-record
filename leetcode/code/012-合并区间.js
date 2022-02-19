    /**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b)=> a[0]-b[0])
  return intervals.reduce((prev,cur,index)=>{ //reduce可以使前一个值和后一个值进行比较，更加的方便
    let peek = prev[prev.length-1];
    if(peek&&peek[1]>=cur[0]){
      let left =peek[0];
      let right = peek[1]>cur[1]?peek[1]:cur[1];
      prev[prev.length-1]=[left,right];
    }
    else{
      prev.push(cur)
    }
    
    return prev
    
  },[])
 
};


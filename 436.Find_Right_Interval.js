/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */

function sortfun(a,b){
  if(a[0]>b[0]){
    return 1;
  }
  else{
    return -1;
  }
}

var findRightInterval = function(intervals) {
  var array=[];
  var len=intervals.length;
  var ans=[];
  console.log("배열 길이",len);

  for(let i=0;i<len;i++){
    ans.push(-1)
    array.push([intervals[i].start,intervals[i].end,i])
  }
  console.log(array);

  array.sort(sortfun);

  console.log(array);

  for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
      if(array[i][1]<=array[j][0]){
        ans[array[i][2]]=array[j][2];
        break;
      }
    }
  }
  console.log(ans);
  return ans;
};

findRightInterval([[1,2]])

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

var A_len=0;
var count=0;
var find_count=0;
var prim_now=0;

var kthSmallestPrimeFraction = function(A, K) {

  A_len=A.length;
  prim_now=Array.from({length:A_len}, x=>A_len-1);
  count=0;
  find_count=K;

  console.log(prim_now);
  ans=search_min(-1,0);
  console.log(ans);
  return ans;
};

var search_min=function(pre_min,now_line){
  var next_min=-1;
  while(prim_now[now_line]>=0){
    pre_check=false;
    next_check=false;

    if(pre_min!=-1){
      if(pre_min[0]*A[prim_now[now_line]]>A[now_line]*pre_min[1]){//현재가 더 작다!
        pre_check=true;
      }else{
        return
      }
    }
    else pre_check=true;

    if(next_min!=-1){
      if(next_min[0]*A[prim_now[now_line]]>A[now_line]*next_min[1]){//현재가 더 작다!
        next_check=true;
      }
    }
    else next_check=true;

    if(next_check==true && pre_check==true){
      count++;
      if(count==find_count){
        return ['find',[now_line,prim_now[now_line]]];
      }
      else{
        prim_now[now_line]--;
      }
    }
  }
}

kthSmallestPrimeFraction(
  [1,2,3,5],
3
)

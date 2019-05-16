/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortfunc(a,b){
  if(a[0]>b[0]){
    return -1;
  }
  else if(a[0]==b[0]){
    if(a[1]<b[1]){
      return -1;
    }
  }
  return 1;
}

var countSmaller = function(nums) {
  let del_num=[];
  let nums_len=nums.length;
  let sol=Array.from({length:nums_len},x=>0)

  //console.log(sol);

  let nums_sort=[];
  for(i in nums){
    nums_sort.push([nums[i],Number(i)])
  }
  // console.log(nums_sort);

  nums_sort.sort(sortfunc)

  console.log(nums_sort);

  for(i in nums_sort){
    //console.log(i);
    count=nums_len-nums_sort[i][1]-1;
    for(j in del_num){
      if(nums_sort[i][1]<del_num[j]){
        count-=1;
      }
    }
    for(let j=Number(i)+1 ; j<nums_len;j++){
      console.log(i,j,nums_sort[Number(i)][0],nums_sort[j][0]);
      if(nums_sort[Number(i)][0]==nums_sort[j][0])
      {
        count-=1;
      }else{
        break;
      }
    }
    sol[nums_sort[i][1]]=count;

    del_num.push(nums_sort[i][1]);
  }
  // console.log(del_num);
  console.log(sol);
  return sol;
};

countSmaller(
  [26,78,27,100,33,67,90,23,66,5,38,7,35,23,52,22,83,51,98,69,81,32,78,28,94,13,2,97,3,76,99,51,9,21,84,66,65,36,100,41]
)

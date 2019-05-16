/**
 * @param {number[]} nums
 * @return {boolean}
 */

 function sortfunc(a,b){
   if(a<b){
     return -1;
   }
   return 1;
 }

var canPartition = function(nums) {
  console.log(nums);
  nums.sort(sortfunc);
  console.log(nums);
};

canPartition(
  [1,5,11,5]
);

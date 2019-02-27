/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  var len=nums.length;
  nums.splice(0,0,0);
  //console.log(nums);
  var chart=[]
  for(let i=0;i<=len;i++){
    chart.push([0,0,0]);
  }
  // console.log(chart);
  // console.log(chart[1][2]);
  sum1=0;
  sum2=0;
  sum3=0;
  for(let i=1;i<=k;i++){
    sum1+=nums[i];
    sum2+=nums[i+k];
    sum3+=nums[i+k*2];
  }
  chart[k][0]=[sum1,1];
  chart[k*2][1]=[sum2,k+1,k];
  chart[k*3][2]=[sum3,k*2+1,k*2];
  //console.log(chart);

  sum1=chart[k][0][0];
  sum2=chart[k*2][1][0]-chart[k][0][0];
  sum3=chart[k*3][2][0]-chart[k*2][1][0];
  for(let i=k+1;i<=len-k*2;i++){
    sum1=sum1-nums[i-k]+nums[i];
    if(chart[i-1][0][0]<sum1){
      chart[i][0]=[sum1,i-k+1];
    }
    else{
      chart[i][0]=[chart[i-1][0][0],chart[i-1][0][1]];
    }

    sum2=sum2-nums[i+k-k]+nums[i+k];
    //console.log('sum2',sum2,chart[i+k-k][0][0]);
    if(chart[i+k-1][1][0]<sum2+chart[i+k-k][0][0]){
      chart[i+k][1]=[sum2+chart[i+k-k][0][0],i+k-k+1,chart[i+k-k][0][1]+k-1];
    }
    else{
      chart[i+k][1]=[chart[i+k-1][1][0],chart[i+k-1][1][1],chart[i+k-1][1][2]];
    }

    sum3=sum3-nums[i+k*2-k]+nums[i+k*2];
    //console.log('sum3',sum3,chart[i+k*2-k][1][0]);
    if(chart[i+k*2-1][2][0]<sum3+chart[i+k*2-k][1][0]){
      chart[i+k*2][2]=[sum3+chart[i+k*2-k][1][0],i+k*2-k+1,chart[i+k*2-k][1][1]+k-1];
    }
    else{
      chart[i+k*2][2]=[chart[i+k*2-1][2][0],chart[i+k*2-1][2][1],chart[i+k*2-1][2][2]];
    }
  }
  //console.log(chart);
  // console.log(chart);
  var path=[,,];
  path[2]=chart[len][2][1]-1;
  path[1]=chart[chart[len][2][2]][1][1]-1;
  path[0]=chart[chart[chart[len][2][2]][1][2]][0][1]-1;
  console.log(path);
  return path;
};


maxSumOfThreeSubarrays(

[7,13,20,19,19,2,10,1,1,19],
3
)

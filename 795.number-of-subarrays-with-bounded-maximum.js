/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
  var n=A.length;
  console.log(n);
  sum=0;
  elem=0;
  pre_int=-1;
  min_elem=0;
  for(let i=0;i<n;i++){
    if(A[i]<L){
      min_elem+=1;
    }
    if(A[i]>=L && A[i]<=R){
      elem+=1;
      elem+=min_elem;
      min_elem=0;
    }
    if(A[i]>R){
      elem=0;
      min_elem=0;
    }

    sum+=elem;
    console.log(i,elem,sum);
  }
  console.log(sum);
  return sum;
};

numSubarrayBoundedMax(
  [73,55,36,5,55,14,9,7,72,52],
32,
69
)

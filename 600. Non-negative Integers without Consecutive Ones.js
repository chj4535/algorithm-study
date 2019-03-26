/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
  var n=num;
  var binary=[];
  while(n>0){
    if(Math.floor(n/2)!=Math.ceil(n/2)){
      binary.push(1)
    }
    else{
      binary.push(0)
    }
    n=Math.floor(n/2)
  }

  console.log(binary);

  var binary_length=binary.length;

  console.log(binary_length);

  var case_num=[1,2,3]
  for(let i=3;i<binary_length;i++){
    case_num.push(case_num[i-1]+case_num[i-2])
  }

  console.log(case_num);

  var len=binary_length;
  var sum=0;
  var output=0;
  while(len>0){
    console.log(len,sum,output);
    if(sum+Math.pow(2,len-1)<=num){
      sum+=Math.pow(2,len-1);
      output+=case_num[len-1];
      len=len-2;
    }
    else{
      len=len-1;
    }
  }
  console.log(output+1);
};

findIntegers(9)

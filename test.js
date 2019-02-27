/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */

 var mod_opnum = function(x,mod,count){
   var plus_num=Math.ceil(x/2);
   var minus_num=x-mod+1;
   if(mod<=plus_num){
     return mod*count-1;
   }
   else{
     return minus_num*count;
   }
 }

var first_mod_opnum = function(x,first_mod){ // 처음 나머지 계산
  var plus_num=Math.floor(x/2);
  var minus_num=x-plus_num-1;
  if(first_mod==0){
    return -1;
  }
  if(first_mod<=plus_num){
    return first_mod*2-1;
  }
  else{
    return (x-first_mod)*2;
  }
}

var op= function(x,count,rest){
  if(count==0){
    return first_mod_opnum(x,rest);
  }
  else{
    return mod_opnum(x,rest,count)
  }
}

var leastOpsExpressTarget = function(x, target) {
  var count=-1;
  var share=0;
  var rest=0;
  var num=target;
  var op_num=0;
  while(num!=0){
    share=Math.floor(num/x);
    rest=num-x*share;
    console.log(share,rest);
    count++;
    op_num+=op(x,count,rest)+1;
    num=share;
    console.log(op_num);
  }
  console.log(op_num-1);
  return op_num-1;
};

leastOpsExpressTarget(3,929)

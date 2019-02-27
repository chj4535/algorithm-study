/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */

 var mod_opnum = function(x,mod){
   var plus_num=Math.ceil(x/2);
   var minus_num=x-mod+1;
   if(mod<=plus_num){
     return mod;
   }
   else{
     return minus_num;
   }
 }

var first_mod_opnum = function(x,first_mod){ // 처음 나머지 계산
  var plus_num=x/2;
  var minus_num=x-plus_num-1;
  if(first_mod<=plus_num){
    return first_mod*2-1;
  }
  else{
    return (x-first_mod)*2;
  }
}

var op_target = function(x,)

var leastOpsExpressTarget = function(x, target) {
    var first_mod=target%x;
    if(target/x==0){
      return first_mod_opnum(x,first_mod);
    }
    else{
      return op(op_target(x,target/x)+first_mod_opnum(x,first_mod)+1
    }
};

/**
 * @param {string} S
 * @return {number}
 */
var uniqueLetterString = function(S) {
  let alpha=[]
  let S_length=S.length;
  //console.log(S);
  //console.log(S_length);

  for(i=0;i<26;i++){
    alpha.push([])
  }
  for(i=0;i<S_length;i++){
    //console.log(S.charCodeAt(i)-65);
    alpha[S.charCodeAt(i)-65].push(i);
  }

  let alpha_length=0
  let left=0
  let right=0
  let uniq=0
  let uniq_sum=0;
  for(i=0;i<26;i++){
    if(alpha[i]!=""){
      alpha_length=alpha[i].length;
      for(j=0;j<alpha_length;j++){
        if(j==0){
          left=alpha[i][j]+1;
        }else{
          left=alpha[i][j]-alpha[i][j-1];
        }

        if(j==alpha_length-1){
          right=S_length-alpha[i][j];
        }
        else{
          right=alpha[i][j+1]-alpha[i][j];
        }
        //console.log(left,right);
        uniq=left*right;
        uniq_sum+=uniq;
      }
    }
  }
  console.log(uniq_sum);
  return uniq_sum;
};

// uniqueLetterString(
// "ABA"
// )

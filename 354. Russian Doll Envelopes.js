/**
 * @param {number[][]} envelopes
 * @return {number}
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

var maxEnvelopes = function(envelopes) {

  if(envelopes.length==0){
    console.log("break");
    return 0;
  }

  let envelopes_len=envelopes.length;

  envelopes.sort(sortfunc);
  console.log(envelopes);

  let envelopes_chart=[];
  for(let i=0;i<envelopes_len;i++){
    if(i==0){
      envelopes_chart.push(envelopes[0]);
    }else{
      if(envelopes_chart[envelopes_chart.length-1][0]==envelopes[i][0]){
        envelopes_chart[envelopes_chart.length-1].push(envelopes[i][1])
      }else{
        envelopes_chart.push(envelopes[i])
      }
    }
  }
  console.log(envelopes_chart);


  //초기설정
  cont=[envelopes_chart[0][envelopes_chart[0].length-1]];
  console.log(cont);
  let envelopes_chart_len=envelopes_chart.length;
  for(let i=1;i<envelopes_chart_len;i++){
    for(let j=1;j<envelopes_chart[i].length;j++){
      for(let k=cont.length-1;k>=0;k--){
        if(cont[k]>envelopes_chart[i][j]){
          if(k==cont.length-1){
            cont.push(0);
          }
          cont[k+1]=envelopes_chart[i][j];
          break;
        }
      }
      if(cont[0]<envelopes_chart[i][j]){
        cont[0]=envelopes_chart[i][j];
      }
    }
  }
  console.log(cont);
  console.log(cont.length);
  return cont.length
};
maxEnvelopes(
  [[5,4],[6,4],[6,7],[2,3]]
)

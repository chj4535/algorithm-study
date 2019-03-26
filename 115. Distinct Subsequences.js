/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let s_chart=[]
  let s_alpha=[]
  let t_alpha=[]
  let find_chart=[]
   // console.log(s);
   // console.log(s.length);
   // console.log(t);
   // console.log(t.length);

  for(let i=0;i<=57;i++){
    s_chart.push([]);
  }


  for(i in s){
    s_alpha.push(Number(s[i].charCodeAt()-65));
    s_chart[s_alpha[i]].push(Number(i));
  }

  for(i in t){
    t_alpha.push(Number(t[i].charCodeAt()-65));
    find_chart.push([]);
  }

  // console.log(s_alpha);
  // console.log(t_alpha);
  // console.log(s_chart);

  for(i in t){//t의 알파벳
    //console.log(t[i],s_chart[t_alpha[i]]);
    let now_t_char=t_alpha[i];
    for(j in s_chart[now_t_char]){//알파벳별 위치
      let now_s_char=s_chart[now_t_char][j]//현 알파벳 위치
      //console.log(i+' now_s_char : '+now_s_char);
      if(i==0){
        find_chart[0].push([now_s_char,1])
      }
      else{
        //console.log("K");
        let ch=0;
        let sum=0;
        for(k in find_chart[i-1]){
          if(find_chart[i-1][k][0]<now_s_char){
            ch=k;
            sum+=find_chart[i-1][k][1];
          }
          else{
            break;
          }
        }
        //console.log('ch',j,i-1,ch,1);
        find_chart[i].push([now_s_char,sum])
        //console.log(find_chart);
      }
    }
  }
  var sol_num=0;
  for(i in find_chart[t.length-1]){
    sol_num+=find_chart[t.length-1][i][1]
  }
  console.log(sol_num);
  return sol_num;
};

numDistinct(
  "CBAZTAAABBCTA",
"CAT"
)

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    var countmap=[];
    for(let i=0;i<=n;i++){
      countmap.push(i);
    }
    countmap[1]=0
    for(let i=5;i<=n;i++){
      let sqrt_n = Math.floor(Math.sqrt(i));
      for(let j=1;j<=sqrt_n;j++){
        if(i%j==0){
          if(countmap[i]>(countmap[j]+(i/j))){
            countmap[i]=countmap[j]+(i/j);
          }
          if(countmap[i]>(countmap[i/j]+j)){
            countmap[i]=countmap[i/j]+j;
          }
        }
      }
    }
    console.log(countmap);
    return countmap[n];
};

minSteps(100)

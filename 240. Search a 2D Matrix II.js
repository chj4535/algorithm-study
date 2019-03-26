/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
  if(cuttingmap(matrix,target)==true){
    console.log("true");
    return true;
  }
  else{
    console.log("false");
    return false;
  }
};

var cuttingmap=function(map,target){
  if(map==0){
    return false;
  }
  var n=map.length
  var m=map[0].length
  while(n>=1 && m>=1){
    //console.log(map);
    n=map.length
    m=map[0].length
    while(n>=1 && m>=1){
      if(map[n-1][0]==target){
        return true;
      }
      if(map[n-1][0]>target){
        map.splice(n-1, 1);
        n=n-1;
      }
      else{
        break;
      }
    }
    //console.log(map);
    while(n>=1 && m>=1){
      if(map[0][m-1]==target){
        return true;
      }
      if(map[0][m-1]<target){
        map.splice(0, 1);
        n=n-1;
      }
      else{
        break;
      }
    }
    //console.log(map);
    while(n>=1 && m>=1){
      if(map[0][m-1]==target){
        return true;
      }
      if(map[0][m-1]>target){
        for(let i=0;i<n;i++)
        {
          map[i].pop()
        }
        m=m-1;
      }
      else{
        break;
      }
    }
    //console.log(map);
    while(n>=1 && m>=1){
      if(map[n-1][0]==target){
        return true;
      }
      if(map[n-1][0]<target){
        for(let i=0;i<n;i++)
        {
          map[i].shift()
        }
        m=m-1;
      }
      else{
        break;
      }
    }
    //console.log(map);
  }
}

searchMatrix(
  [],0
)

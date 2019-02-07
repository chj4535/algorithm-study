/**
 * @param {number[][]} points
 * @return {number}
 */

var bal_num;
var shot=0;

function sortfun(a,b){
  if(a[0]>b[0]){
    return 1;
  }
  else if(a[0]<b[0]){
    return -1;
  }
  else if(a[0]==b[0]){
    if(a[1]>b[1]){
      return 1;
    }
    else if(a[1]<b[1]){
      return -1;
    }
    else return 0;
  }
}


Array.prototype.compare = function(array) {
  // console.log(this);
  // console.log(array);
  if (!array) {
    return false;
  }
  if (this.length !== array.length) {
    return false;
  }
  for (var i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].compare(array[i])) {
        return false;
      }
    }
    else if (this[i] !== array[i]) {
      return false;
    }
  }
  return true;
}



var findMinArrowShots = function(points) {

    bal_num=points.length;
    points.sort(sortfun);
    // console.log(points);

    now_last=0;

    while(points.length!=0){
      // console.log(shot);
      // console.log(points);
      if(now_last<points[0][0]){
        shot++;
        now_last=points[0][1];
        points.shift();
      }
      else{
        points.shift();
      }
    }
    console.log(shot);
    return shot;
};

findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]);

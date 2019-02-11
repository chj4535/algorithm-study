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
    shot=0;
    bal_num=points.length;
    points.sort(sortfun);
    // console.log(points);

    now_last=Number.MIN_SAFE_INTEGER
    now_front=Number.MAX_SAFE_INTEGER;
    // console.log(now_front);
    // console.log(now_last);

    while(points.length!=0){
       // console.log(shot);
       // console.log(points);
       if(now_last<points[0][0]){
        shot++;
        now_front=points[0][0];
        now_last=points[0][1];
        points.shift();
      }
      else{
        if(now_front<points[0][0]) now_front=points[0][0];
        if(now_last>points[0][1]) now_last=points[0][1];
        points.shift();

      }
      // console.log(now_front,now_last);
    }
    console.log(shot);
    return shot;
};

findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]);

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */

var rec_num;
var min;
var max;
var sum=0;

function sortfun(a,b){
  if(a[1]<b[1]){
    return -1;
  }
  else if (a[1]>b[1]) {
    return 1;
  }
  else{
    if(a[0]<b[0]){
      return -1;
    }
    else if (a[0]>b[0]) {
      return 1;
    }
    else{
      return 0;
    }
  }
}

var isRectangleCover = function(rectangles) {
  rec_num=rectangles.length;
  rectangles.sort(sortfun);
  console.log(rectangles);

  min=[rectangles[0][0],rectangles[0][1]];
  max=[rectangles[0][2],rectangles[0][3]];

  for(let i=0;i<rec_num;i++){

    if(rectangles[i][0]<min[0] || rectangles[i][1]<min[1]){
      min[0]=rectangles[i][0];
      min[1]=rectangles[i][1];
    }

    if(rectangles[i][2]>max[0] || rectangles[i][3]>max[1]){
      max[0]=rectangles[i][2];
      max[1]=rectangles[i][3];
    }

    sum+=(rectangles[i][2]-rectangles[i][0])*(rectangles[i][3]-rectangles[i][1]);

  }

  console.log(min);
  console.log(max);
  console.log(sum);

  if(((max[0]-min[0])*(max[1]-min[1]))!=sum){
    console.log("false");
    return false;
  }


};

isRectangleCover(
  rectangles = [
  [1,1,2,3],
  [1,3,2,4],
  [3,1,4,2],
  [3,2,4,4]
]
)

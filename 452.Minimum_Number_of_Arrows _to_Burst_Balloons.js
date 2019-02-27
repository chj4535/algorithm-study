/*
풍선의 시작 부분을 중점으로 정렬, 같은 시작시 끝이 빠른 걸 앞으로 오게 정렬했다
하지만 사실 시작 부분을 볼 필요없이 끝부분 기준으로 정렬도 풀리는 문제이다.
*/


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

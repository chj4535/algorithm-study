/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */

var rec_num;
var min;
var max;
var sum=0;

var point_list=[];

function sortfun(a,b){
  var rec_num;
  var min;
  var max;

  var point_list=[];
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

  sum=0;
  point_list=[];
  rec_num=rectangles.length;
  rectangles.sort(sortfun);
  //console.log(rectangles);

  min=rectangles[0];
  max=rectangles[0];

  for(let i=0;i<rec_num;i++){

    if(rectangles[i][0]<min[0] || rectangles[i][1]<min[1]){
      min=rectangles[i];
    }

    if(rectangles[i][2]>max[2] || rectangles[i][3]>max[3]){
      max=rectangles[i];
    }

    sum+=(rectangles[i][2]-rectangles[i][0])*(rectangles[i][3]-rectangles[i][1]);
    //console.log(sum);
  }

  // console.log(min);
  // console.log(max);
  // console.log(sum);

  //실제 크기와 각 point 크기의 합이 다를 경우
  if(((max[2]-min[0])*(max[3]-min[1]))!=sum){
    console.log("check1 : false");
    console.log(sum);
    console.log(min);
    console.log(max);
    console.log(((max[2]-min[0])*(max[3]-min[1])));
    return false;
  }

  rectangles.some(function(element){
    point_list.push([element[0],element[1]]);
    point_list.push([element[0],element[3]]);
    point_list.push([element[2],element[1]]);
    point_list.push([element[2],element[3]]);
  });

  // console.log(point_list);

  point_list.sort(sortfun);

  // console.log(point_list);

  num=0;
  while(num<point_list.length-1){
    // console.log(num,point_list[num],point_list.length);
    if(point_list[num][0]==point_list[num+1][0] && point_list[num][1]==point_list[num+1][1]){
      point_list.splice(num,1);
      point_list.splice(num,1);
    }
    else{
      num++;
    }
  }
   console.log(point_list);
   console.log(point_list.length);

  //중복제거 했을 떄 남은 점들이 4개(모서리만 남았는지)
  if(point_list.length!=4){
    console.log("check2 : false");
    return false;
  }

  //남은 4점들이 모서리가 맞는지
  var check_points=[[min[0],min[1]],[min[0],max[3]],[max[2],min[1]],[max[2],max[3]]]
  console.log(check_points.sort());
  console.log(point_list.sort());

  for(let i=0;i<=3;i++){
    if(point_list[i][0]!=check_points[i][0] || point_list[i][1]!=check_points[i][1]){
      console.log("check3 : false");
      return false;
    }
  }

  console.log("true");
  return true;


};

isRectangleCover(
  rectangles = [[0,0,1,1],[0,0,2,1],[1,0,2,1],[0,2,2,3]]
)

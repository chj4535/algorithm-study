/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  var len = A.length;

  var line_max=0;//직선 최대합
  var circular_max=0;//원 최대합
  var single_max=-90000;
  var line_sum=0;
  var circular_R=[];
  var circular_Rmax=[];
  var circular_L=[];

  circular_Rmax.push(A[0])
  circular_R.push(A[0]);
  if(A[0]>0){
    line_sum=A[0];
  }
  line_max=A[0];//-인 경우 생각
  for(let i=1;i<len;i++){

    //////모든 값이 마이너스일 경우 ///// => 이 경우는 하나의 값이 최대값이 됨
      if(A[i]>single_max){
        //console.log('s_change',single_max);
        single_max=A[i];
      }

      //////원형일 경우 /////
      circular_R.push(circular_R[i-1]+A[i]);//0번방부터 오른쪽으로 계속 더해가기
      if(circular_Rmax[i-1]<circular_R[i]){
        circular_Rmax.push(circular_R[i])
      }
      else{
        circular_Rmax.push(circular_Rmax[i-1])//0번방부터 오른쪽으로 더해간값들 중 최대값 저장(현재 위치에서는 여기 적혀 있는 값이 제일 큰 0번방부터 더해진 값)
      }
      //////원형일 경우 /////

      //////직선일 경우 /////
      line_sum+=A[i];
      //console.log('line_sum',line_sum);
      if(line_sum<0){
        line_sum=0;//0보다 작아지면 0으로 초기화
      }
      else{
          if(line_max<line_sum){
            //console.log('max',line_max);
            line_max=line_sum;//최대값 저장
          }
      }
      //////직선일 경우 /////
  }
  // console.log(circular_R);
  // console.log(circular_Rmax);
  // console.log(line_max);

  //////윈형일 경우 ///// => 오른쪽에서 최대값 구했으니 왼쪽에서 최대값 구해야함
  circular_L.push(A[len-1]);
  circular_max=circular_L[0];// 우리가 구할 원형 쵀대값 초기화
  if(circular_max<circular_L[0]+circular_Rmax[len-2]){
    circular_max=circular_L[0]+circular_Rmax[len-2]
  }

  for(let i=len-2;i>=0;i--){
    circular_L.push(circular_L[len-i-2]+A[i]);
    if(circular_max<circular_L[len-i-1]+circular_Rmax[i-1]){ // 현재 위치에서 오른쪽 최대값과 끝방~지금 위치까지 더한 값이 최대값인지 비교
      circular_max=circular_L[len-i-1]+circular_Rmax[i-1];
    }
  }
  //console.log(circular_max);
  //console.log(single_max);
  if(circular_max>line_max){ // 원형이 직선보다 클 경우
    return circular_max;
  }
  else{
    if(single_max<line_max){ //직선이 싱글값(모두가 마이너스)보다 큰 경우
      return line_max;
    }
    else{
      //console.log(single_max);
      return single_max; // 모든값이 마이너스여서 싱글값 출력
    }
  }
};


maxSubarraySumCircular(
  [-3,-5,-2,-5,-6]
)

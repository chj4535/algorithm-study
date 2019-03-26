/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var box=[];
var ver=[];
var hor=[];
var map=[]

var solveSudoku = function(board) {
    box=[];
    ver=[];
    hor=[];
    map=board;

    var check=0;//몇개 확정인지 확인

    for(let i=0;i<9;i++){
      box.push([0,0,0,0,0,0,0,0,0,0])
      ver.push([0,0,0,0,0,0,0,0,0,0])
      hor.push([0,0,0,0,0,0,0,0,0,0])
    }

    // console.log(box);
    // console.log(ver);
    // console.log(hor);

    for(let i=0;i<9;i++){ //주어진 값 넣기
      for(let j=0;j<9;j++){
        if(board[i][j]!="."){
          let num=Number(board[i][j])
          check_num(i,j,num);
        }
      }
    }

    console.log(hor);
    console.log(ver);
    console.log(box);
};


var check_num=function(x,y,num){
  hor[x][0]+=1;
  hor[x][num]=y;

  ver[y][0]+=1;
  ver[y][num]=x;

  box[Math.floor(x/3)*3+Math.floor(y/3)][0]+=1;
  //console.log(x,y,(x-Math.floor(x/3)*3)*3+(y-Math.floor(y/3)*3)+1);
  box[Math.floor(x/3)*3+Math.floor(y/3)][num]=(x-Math.floor(x/3)*3)*3+(y-Math.floor(y/3)*3)+1;
}

var vertical_compare=function(a,b,c){
  for(i=1;i<=9;i++){
    target_x=6;
    target_y=6;
    if(ver[a][i]!=0){
      target_y-=(a-Math.floor(a/3)*3)+1;
      target_x-=(Math.floor(ver[a][i]/3))+1;
    }
  }
}

solveSudoku(
  [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
)

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var visit;
var x;
var y;
var dx=[-1,0,0,1];
var dy=[0,-1,1,0];

var no_surrounded=function(zero_x,zero_y,board){
  var now_x;
  var now_y;
  var list=[[]];

  //console.log(zero_x,zero_y);
  list[0][0]=zero_x;
  list[0][1]=zero_y;
  f=0;
  r=-1;

  while(f>r){

    r++;
    now_x=list[r][0];
    now_y=list[r][1];

    if(visit[now_x][now_y]==0){
      visit[now_x][now_y]=-1;
      for(let i=0;i<4;i++){
        xx=now_x+dx[i];
        yy=now_y+dy[i];
        if(xx>=0 && xx<x && yy>=0 && yy<y){
          if(board[xx][yy]=="O" && visit[xx][yy]==0){
            f++;
            //console.log(now_x,now_y,xx,yy);
            list.push([xx,yy]);
          }
        }
      }
    }
  }
}

var solve = function(board) {

    x = board.length;
    if(x==0){
      return;
    }
    y = board[0].length;
    visit = Array(x).fill(null).map(()=>Array(y).fill(0));
    //console.log(visit);

    // console.log(x);
    // console.log(y);
    // console.log(visit);
    // console.log(board);

    for(i=0;i<y;i++){

      if(board[0][i]=="O" && visit[0][i]==0){
        no_surrounded(0,i,board);
      }
    }

    for(i=1;i<x-1;i++){
      if(board[i][0]=="O" && visit[i][0]==0){
        no_surrounded(i,0,board);
      }
    }

    for(i=1;i<x-1;i++){
      if(board[i][y-1]=="O" && visit[i][y-1]==0){
        no_surrounded(i,y-1,board);
      }
    }

    for(i=0;i<y;i++){
      if(board[x-1][i]=="O" && visit[x-1][i]==0){
        no_surrounded(x-1,i,board);
      }
    }

    for(i=0;i<x;i++){
      for(j=0;j<y;j++){
        if(board[i][j]=="O" && visit[i][j]==0){
          board[i][j]="X";
        }
      }
    }
    console.log(board);
};

solve([
  ["X","O","X","X"],
  ["O","X","O","X"],
  ["X","O","X","O"],
  ["O","X","O","X"]]);

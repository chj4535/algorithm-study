/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var chart=[]
var sol_map=[]
var solveSudoku = function(board) {

    // console.log(box);
    // console.log(ver);
    // console.log(hor);

    sol_map=board;

    for(let i=0;i<9;i++){ //공백풀배열 만들기
      chart.push([]);
      for(let j=0;j<9;j++){
        chart[i].push([0,0,0,0,0,0,0,0,0,0]);
      }
    }

    for(let i=0;i<9;i++){ //주어진값 넣기
      for(let j=0;j<9;j++){
        if(board[i][j]!="."){
          let num=Number(board[i][j])
          chart[i][j][0]=-1;
          insert_num(i,j,num);
        }
      }
    }
};

var insert_num=function(x,y,num){
  for(let i=0;i<9;i++){
    if(chart[i][y][0]!=-1){
      chart[i][y][num]=1;
      chart[i][y][0]+=1;

      if(chart[i][y][0]==8){//소거하다가 한개남음
        for(let j=1;j<=9;j++){
          if(cart[i][y][j]==0){
            sol_map[i][y]=j;
            insert_num(i,y,j);
            break;
          }
        }
      }

    }
  }
}

solveSudoku(
  [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
)

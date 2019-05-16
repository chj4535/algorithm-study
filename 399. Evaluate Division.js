/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var data =[]; // name,connect,value,multistate
var dataIndex=[];
var solveValue=-1;

var calcEquation = function(equations, values, queries) {
  var equationsLength = equations.length;
  var solveArray=[];
  data =[]; // name,connect,value,multistate
  dataIndex=[];
  //make data
  for(let i=0;i<equationsLength;i++)
  {
    let node1 = equations[i][0];
    let node2 = equations[i][1];
    let node1Index = dataIndex.indexOf(node1);
    let node2Index = dataIndex.indexOf(node2);

    if(node1Index==-1) // not exist
    {
      dataIndex.push(node1);
      data.push({id:node1,children:[node2],value:[values[i]],multistate:[1]})
    }
    else{ //exist
      let childrenIndex = data[node1Index].children.indexOf(node2);
      if(childrenIndex==-1){//children not exist
        data[node1Index].children.push(node2);
        data[node1Index].value.push(values[i]);
        data[node1Index].multistate.push(1);
      }
    }

    if(node2Index==-1) // not exist
    {
      dataIndex.push(node2);
      data.push({id:node2,children:[node1],value:[values[i]],multistate:[-1]})
    }
    else{ //exist
      let childrenIndex = data[node2Index].children.indexOf(node1);
      if(childrenIndex==-1){//children not exist
        data[node2Index].children.push(node1);
        data[node2Index].value.push(values[i]);
        data[node2Index].multistate.push(-1);
      }
    }
  }
  //console.log(data);
  //console.log(dataIndex);

  //findLoad
  for(let i=0;i<queries.length;i++){
    console.log("findLoad",queries[i]);
    solveValue=-1;
      findValue(queries[i][0],queries[i][1],1,[queries[i][0]]);
      console.log("solve : ",solveValue);
      solveArray.push(solveValue);
  }
  console.log(solveArray);
  return solveArray;
};

var findValue = function(valueA,valueB,value,path){
  //console.log("currentState",valueA,valueB,value,path);
  let valueAindex = dataIndex.indexOf(valueA);
  if(valueAindex==-1){
    return;
  }
  let valueBindex = data[valueAindex].children.indexOf(valueB); // check connect
  let nowValue = value;
  //console.log(valueAindex,valueBindex,nowValue);
  if(solveValue!=-1){ // findValue
    return;
  }
  if(valueA==valueB){
    solveValue=1;
    return;
  }
  if(valueBindex==-1) // not connect
  {
    //console.log(data[valueAindex].children.length);
    for(let j=0;j<data[valueAindex].children.length;j++)
    {
      //console.log("childPath :",j,path);
      if(path.indexOf(data[valueAindex].children[j])==-1) // first connect
      {
        nowValue = value;
        if(data[valueAindex].multistate[j]==1){
          nowValue=nowValue*data[valueAindex].value[j];
        }
        else{
          nowValue=nowValue/data[valueAindex].value[j];
        }
        let currentPath = [...path];
        currentPath.push(data[valueAindex].children[j]);
        //console.log("go",data[valueAindex].children[j],valueB,nowValue,currentPath);
        findValue(data[valueAindex].children[j],valueB,nowValue,currentPath);
        //console.log("childPath :",data[valueAindex].children.length,j,path);
      }
    }
    return;
  }
  else{ //connect
    nowValue=value;
    if(data[valueAindex].multistate[valueBindex]==1){
      nowValue=nowValue*data[valueAindex].value[valueBindex];
    }
    else{
      nowValue=nowValue/data[valueAindex].value[valueBindex];
    }
    solveValue=nowValue;
  }
}

calcEquation(
  [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]],
[3.0,4.0,5.0,6.0],
[["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
)

// var data = [
// { _id: "MongoDB", children: [] },
// { _id: "Postgres", children: [] },
// { _id: "Databases", children: [ "MongoDB", "Postgres" ] },
// { _id: "Languages", children: [] },
// { _id: "Programming", children: [ "Databases", "Languages" ] },
// { _id: "Books", children: [ "Programming" ] }
// ];
//
//
// var node="MongoDB";
// for(i=0;i<data.length;i++){
//   if(data[i].children.indexOf(node)!=-1){
//     console.log(data[i]);
//   }
// }

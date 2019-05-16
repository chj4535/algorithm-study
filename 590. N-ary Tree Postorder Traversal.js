/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

var postorderArray=[];

var postorder = function(root) {
  postorderArray=[];
  if(root!=null){
    findchild(root)
    console.log(postorderArray);  
  }
  return postorderArray;
};

var findchild = function(root){
  let child = root.children;
  if(child==[]){
    console.log("val :"+root.val);
    postorderArray.push(root.val);
    return;
  }
  else{
    let child_len = child.length;
    for(let i=0;i<child_len;i++){
      findchild(child[i]);
    }
    console.log("val :"+root.val);
    postorderArray.push(root.val);
  }
}


postorder(
  null
)

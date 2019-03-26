/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var trace=[]

function postorder(now_root){
  if(now_root!=null && now_root.left!=null){
    postorder(now_root.left)
  }

  if(now_root!=null && now_root.right!=null){
    postorder(now_root.right)
  }
  if(now_root!=null){
    trace.push(now_root.val)
  }
}

var postorderTraversal = function(root) {
    trace=[]
    postorder(root)
    console.log(trace);
    return trace;
};

// postorderTraversal(
// [1,null,2,3]
// )

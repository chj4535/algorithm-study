/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


var mergeKLists = function(lists) {
  let card=[]
  let lists_length=lists.length
  for(i=0;i<lists_length;i++){
    let list=lists[i]
    while(1){
      if(list!=null){
        card.push(list.val);
        list=list.next;
      }else{
        break;
      }
    }
  }
  console.log(card);

  card.sort(function(a,b){
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
  console.log(card);
  let card_length=card.length;
  now=null
  if(card_length!=0){
    now = new ListNode(card[card_length-1]);
    for(i=card_length-2;i>=0;i--){
      pre_now=now;
      now=new ListNode(card[i]);
      now.next=pre_now;
    }
  }
  return now;
};

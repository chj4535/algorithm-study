/**
 * @param {number[]} deck
 * @return {number[]}
 */

var deck_sorted=[] //정렬된 카드
var card_order=[] //카드 뽑는 순서
var deck_order=[] //카드 뽑는 순서에 따른 카드 정렬(출력값)

function reveal(length,card){
  let pop_length=Math.ceil(length/2);
  for(i=0;i<pop_length;i++){
    card_order.push(card.splice(i,1)[0]);
    deck_order[card_order[card_order.length-1]]=deck_sorted[card_order.length-1]
  }
  if(pop_length!=Math.floor(length/2)){
    card.push(card.shift())
  }
  if(length-pop_length>0){
    reveal(length-pop_length,card)
  }
}

var deckRevealedIncreasing = function(deck) {
  deck_sorted=[] //정렬된 카드
  card_order=[] //카드 뽑는 순서
  deck_order=[] //카드 뽑는 순서에 따른 카드 정렬(출력값)
  deck.sort(function(a,b){
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
  deck_sorted=deck;

  let n = deck.length
  let card=[]
  for(i=0;i<n;i++){
    deck_order.push(-1)
    card.push(i)
  }
  reveal(n,card);
  console.log(deck_order);
  return deck_order;
};

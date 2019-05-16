/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  console.log(s);
  let alphabetPosition=Array.from({length: 26}, x => -1);
  let sList=s.split("");
  let sLength=sList.length;
  console.log(alphabet);
  console.log("a".charCodeAt(0)-97);
  console.log("z".charCodeAt(0)-97);
  console.log(sList);
  console.log(sLength);
  for(let i=0;i<26;i++){
    for(let j=0;j<sLength;j++){
      if(sList[j].charCodeAt(0)-97 == i){
        if(alphabetPosition[i]==-1){
          
        }
      }
    }
  }
};

removeDuplicateLetters(
  "bcabc"
)

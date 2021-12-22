function rot13(str) {
  //create the arr based on the spaces
  let arr = str.split(" ");
  let arrLen = arr.length
  //create newArr that is empty 
  //creats an array of upper case letters
  let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let getWord = function(arr, arrLen){
    let newSent = []
    for(let i = 0; i < arrLen; i++){
      let word = arr[i]
      //console.log(word);
      //console.log("word", word)
      let newWord = getLetter(word, word.length)
      //console.log("new Word", newWord)
      newSent.push(newWord)
    }// end of i loop 
    newSent = newSent.join(" ");
    //console.log(newSent)
    return newSent;
  }// end of getWord function
  let getLetter = function(word, wordLen){
    //console.log(word)
    let newWord = []
    for(let j = 0; j < wordLen; j++){
      let letter = word[j]
      //console.log("letter", letter)
      let change = changeLetter(word, letter, alpha)
      //console.log(change)
      //return change;
      newWord.push(change)
    }// end of for j loop
    newWord = newWord.join("")
    //console.log("new word", newWord)
    return newWord
  }//end of fxn getLetter
  let changeLetter = function(word, letter, alpha){
    let punc = []
    //console.log("word", word)
    //console.log("letter", letter)
    let index = alpha.indexOf(letter)
    //console.log("index", index)
    if (index < 0){
      //console.log("this is punctuation")
      //console.log(typeof(letter))
      punc.push(letter)
      letter.replace(letter[index], "")
    }else{
    let newI = index - 13
    //console.log("new index", newI)
    if (newI < 0){
      newI = newI + 26
      let newLetter = alpha[newI]
      return newLetter
    }else{
      let newLetter = alpha[newI]
      return newLetter
    }//end if/else loop
    }
    //console.log(punc)
    return punc
    }//end changeLetter
  let words = getWord(arr, arrLen);
  console.log("words", words)
  return words;
}

rot13("SERR PBQR PNZC!");

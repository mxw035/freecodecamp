function palindrome(str) {
  str = str.toLowerCase()
  str = str.trim()
  let pattern = /\W|\0|_/gi
  let newStr = str.replace(pattern, "")
  //console.log(newStr)
  let arr = []
  for (let k = 0; k < newStr.length; k++){
    //console.log(newStr)
    //console.log(newStr[k])
    arr.push(newStr[k])
  }
  //arr.push(newStr)
  let newArr = arr.reverse()
  newArr = newArr.join('')
  //console.log(newArr)
  for(let i = 0; i < newStr.length; i++){
    //console.log(newStr[i])
    //console.log(newArr[0][i])
    if(newArr == newStr){
      console.log(newStr)
      console.log(newArr)
      console.log("true")
      return true;
    }
  }
  console.log(newStr)
  console.log(newArr)
  console.log("false")
  return false;
  
}

palindrome("almostomla");

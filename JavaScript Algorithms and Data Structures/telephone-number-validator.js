function telephoneCheck(str) {
  console.log("start number", str)
  if(str[0] == "-"){
    console.log("str[0], r/t false")
    return false;
  }//end of if loop
  //check for ()
  let bStr = str
  let x = bStr.indexOf("(")
  let y = bStr.indexOf(")")
  if (x >= 0 & y >= 0){
  console.log(x, y)
  let pCheck = bStr.slice(x+1, y)
  console.log("pCheck", pCheck)
  bStr = bStr.replace(" ", "")
  bStr = bStr.replace("-", "")
  let pLen = pCheck.length
  if(pLen == 3 | pLen == 4){
    console.log("pLen", pLen)
    console.log("continue")
  }else{
    console.log("pCheck false, r/t false")
    return false
  }//end of pcheck if/else
  }else{
    console.log(x)
    console.log(y)
    if(x >= 0 | y >=0){
    console.log("parenthesis wrong r/t flase")
    return false
    }else{
      console.log("no parenthesis continue")
    }
  }
  console.log("str b/f space split", str)
  str = str.split(/\D/)
  console.log("begin number", str)
  let len = str.length
  console.log("begin len", len)
  let checkCount = function(str, len){
    //for loop to check for blanks 

    let blank = []
    for(let i = 0; i < len; i++){
      if(str[i] == blank){
        str.splice(i, 1)
      }else{

      }//end of if/else
      console.log("blank check", str)
      len = str.length
    }// end of for let i loop
    if(len == 3){
      console.log("no country", str)
      let newNum = checkNum(str)
      if (newNum == true){
        console.log("main true")
        return true
      }else{
        console.log("main false")
        return false
      }
    }else if (len == 4){
      console.log("country", str)
      let newNum = checkFour(str)
      if (newNum == true){
        console.log("main true")
        return true
      }else{
        return false 
      }
    }else if (len > 4){
      console.log("long num", str)
      let newNum = checkLong(str, len)
      console.log("new num", newNum)
      let newNum2 = checkFour(newNum);
      if(newNum2 == true){
        console.log("main true")
        return true
      }else{
        console.log("main false")
        return false 
      }
    }else{
      console.log("check num small", str)
      console.log(len)   
      if(len == 1){
        let newNum = checkOne(str);
        if (newNum == true){
          console.log("checkCount true r/t from checkOne")
          return true
        }else{
          console.log("checkCount flase r/t from checkOne")
          return false
        }
      }
      console.log("main false")
      return false    
    }//end of if/else loop 
  }//end of checkCount fx 
  let checkNum = function(str){
    let area = str[0]
    let state = str[1]
    let person = str[2]
    if(area.length == 3 & state.length ==3 & person.length == 4){
      console.log("number valid")
      console.log("checkNum true")
      return true;
    }else{
      console.log("number invalid")
      console.log("checkNum false")
      return false;
    }//end of if/else loop
  }//end of checkNum
  let checkFour = function(str){
    let country = str[0]
    if(country == ""){
      console.log("county blank, r/t false")
      return false
    }
    let area = str[1]
    let state = str[2]
    let person = str[3]
    if (country == 1){
      console.log("country is 1")
      let area = str[1]
    let state = str[2]
    let person = str[3]
    if(area.length == 3 & state.length ==3 & person.length == 4){
      console.log("number valid")
      console.log("checkFour true")
      return true;
    }else{
      console.log("number invalid")
      console.log("checkFour false")
      return false;
    }//end of if/else loop
    }else{
      console.log("wrong country checkFour false")
      return false
    }//end of if/else country
  }//end of checkFour
  let checkLong = function(str, len){
    //console.log("number", str)
    //console.log("len", len)
    for(let i = 0; i < len; i++){
      let section = str[i]
      //console.log("section", section)
      let pattern = /\d/gi
      //console.log(typeof(section), section)
      //console.log(typeof(str), str)
      let blank = []
      if(section == blank){
        //console.log("blank")
        let x = str.indexOf(section)
        //console.log(x)
        str.splice(x, 1)
      }else{
        //console.log("number", str)
      }//end of if/else loop 
    }//end of for i loop
    return str;
  }//end of check long group
  let checkOne = function(str){
    //console.log("checkOne start")
    let newStr = str[0]
    let len = newStr.length
    console.log("len", len)
    let checks = []
    for(let i = 0; i < len; i++){
      let indiv = newStr[i]
      let check = indiv.search(/\d/gi)
      if (check == 0){
        newStr.replace(i, "")
      }
      //console.log("check", check)
    }//end of for i loop
    let checkLen = checks.length
    console.log("check len", checkLen)
    if (checks == "" & checkLen == 0 & len == 10){
      console.log("checkOne True")
      return true;
    }else{
      console.log("checkOne False")
      return false;
    }//end of check if/else
  }//end checkOne fxn 
  let check = checkCount(str, len);
  console.log("main check", check)
  if(check == true){
    return true;
  }else{
    return false;
  }
}//end of main fxn 

telephoneCheck("555)-555-5555");

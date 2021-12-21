  function convertToRoman(num) {
  num = num.toString();
  let numLen = num.length;
  console.log(num)
  //console.log(numLen)
  const getPlaces = function(num, numLen){
    for(let i = 0; i < numLen; i++){
      let ones = numLen-1
      return {
        one: num[ones], 
        ten: num[ones-1],
        hund: num[ones-2],
        thous: num[ones-3]
      };
    }
  }//end of getPlaces
  let getOne = function(one){
    let i = "I"
    let v = "V"
    if (one < 4){
      let oneStr = i.repeat(one);
      return oneStr;
    }else if (one == 4){
      let oneStr = "IV"
      return oneStr;
    }else if (one > 4 & one != 9){
      one = one - 5
      let oneEx = i.repeat(one)
      let oneStr = v.concat(oneEx)
      return oneStr;
    }else if (one == 9){
      let oneStr = "IX"
      return oneStr;
    }else{
      return null;
    }
  }//end of getOne
  const getTen = function(ten){
    let x = "X"
    let l ="L"
    if(ten <4){
      let tenStr = x.repeat(ten)
      return tenStr;
    }else if(ten == 4){
      let tenStr = "XL"
      return tenStr;
    }else if (ten > 4 & ten != 9){
      ten = ten-5
      let tenEx = x.repeat(ten)
      let tenStr = l.concat(tenEx);
      return tenStr; 
    }else if (ten == 9){
      let tenStr ="XC"
      return tenStr;

    }else{
      return null;
    }
  }//end getTen
  const getHund = function(hund){
    let c = "C"
    let d = "D"
    if(hund < 4){
      let hundStr = c.repeat(hund)
      return hundStr;
    }else if (hund == 4){
      let hundStr = "CD"
      return hundStr;
    }else if (hund > 4 & hund != 9){
      hund = hund - 5
      let hundEx = c.repeat(hund)
      let hundStr = d.concat(hundEx)
      return hundStr;
    }else if (hund == 9){
      let hundStr = "CM"
      return hundStr;
    }else{
      return null;
    }
  }// end of getHund
  const getThous = function(thous){
    let m = "M"
    let v = "V"
    if(thous < 4){
      let thousStr = m.repeat(thous)
      return thousStr;
    }else if (thous == 4){
      let thousStr = "VM"
      return thousStr;
    }else if (thous > 4){
      thous = thous - 5
      let thousEx = m.repeat(thous)
      let thousStr = v.concat(thousEx)
      return thousStr;
    }else{
      return null;
    }
  }
  let place = getPlaces(num, numLen);
  //console.log("place", place);
  let one = place.one
  let ten = place.ten
  let hund = place.hund
  let thous = place.thous
  let romOne = getOne(one);
  let romTen = getTen(ten);
  let romHund = getHund(hund);
  let romThous = getThous(thous)
  //console.log("romOne", romOne)
  //console.log("romTen", romTen)
  //console.log("romHund", romHund)
  //console.log("romThous", romThous)
  //console.log(typeof(romOne))
  let newNum = ""
  if(romThous != null){
    newNum = newNum.concat(romThous);
  }else{

  }
  if (romHund != null){
    newNum = newNum.concat(romHund);
  }else{

  }
  if (romTen != null){
    newNum = newNum.concat(romTen);
  }else{

  }
  if (romOne != null){
    newNum = newNum.concat(romOne);
  }else{

  }
  console.log(newNum)
 return newNum;
}

convertToRoman(36);

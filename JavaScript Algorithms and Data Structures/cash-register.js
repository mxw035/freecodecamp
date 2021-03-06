function checkCashRegister(price, cash, cid) {
  let change = cash - price
  if(change ==0){
    return{
      status: "CLOSED", 
      change: [cid]
    }
  }
  //console.log("change", change)
  let dollar = Math.trunc(change)
  let cents = change.toFixed(2) - dollar
  cents = cents.toFixed(2)
  console.log("dollar", dollar, "cents", cents)
  let log = []
  let hunds = []
  let twens = []
  let tens = []
  let fives = []
  let ones = []
  let quarts = []
  let dimes = []
  let nickles = []
  let pens = []
  //check dollars 
  if (dollar >= 100){
  let hund = dollar /100  
  let hStr = hund * 100
  let cidH = cid[8][1]
  if (hStr > cidH){
    dollar = dollar - cidH
    hunds.push("ONE HUNDRED", hund * 100)
  }else {
  dollar = dollar - (hund*100)
  hunds.push("ONE HUNDERED", hund*100)
  log.push("ONE HUNDERED", hund*100)
  }
  }//end of 100

  if(dollar >= 20){
  let twen = Math.floor(dollar/20)
  let twStr = twen * 20
  let cidTw = cid[7][1]
  if(twStr > cidTw){
    dollar = dollar - cidTw 
    twens.push("TWENTY", cidTw)
  }else {
  dollar = dollar - (twen * 20)
  twens.push("TWENTY", twen * 20)
  log.push("TWENTY", twen * 20)
  }
  }//end of 20 
  //console.log(dollar)
  if(dollar >= 10){
  let ten = Math.floor(dollar/10)
  //console.log("ten", ten)
  let tStr = ten * 10
  //console.log(tStr)
  let cidT = cid[6][1]
  if(tStr > cidT){
    dollar = dollar - cidT
    tens.push("TEN", cidT)
  }else{
  log.push("TEN", ten * 10)
  tens.push("TEN", ten * 10)
  }
  }//end of 10
  //console.log(dollar)
  if(dollar >= 5){
  let five = Math.floor(dollar/5)
  dollar = dollar - (five*5)
  let fStr = five * 5
  let cidF = cid[5][1]
  if(fStr > cidF){
    dollar = dollar - cidF
    fives.push("FIVE", cidF)
  }else{
  log.push("FIVE", five * 5)
  fives.push("FIVE", five * 5)
  }
  }//end of 5 
  //console.log(dollar)
  if(dollar >=1){
  let one = Math.floor(dollar/1)
  let oStr = one * 1
  let cidO = cid[4][1]
  if(oStr > cidO){
    dollar = dollar - cidO
    ones.push("ONES", cidO)
  }else{
  dollar = dollar - (one * 1)
  log.push("ONE", one * 1)
  ones.push("ONE", one * 1)
  }
  }//end 1 
  //console.log(dollar)
  //check cents 
  let coins = cents * 100
  console.log("coins", coins)
  if(coins >= 25){
  let quarter = Math.floor(coins/25)
  let cidQ = cid[3][1]*100
  let qStr = quarter * 25
  if(qStr > cidQ){
    coins = coins - cidQ
    quarts.push("QUARTER", cidQ)
  }else{
  coins = coins - (quarter*25)
  log.push("QUARTER", (quarter*25)/100)
  quarts.push("QUARTER", (quarter*25)/100)
  }
  }//end quarter 
  if(coins >= 10){
  let dime = Math.floor(coins/10)
  let cidD = cid[2][1]*100
  console.log(cidD)
  let dStr = dime * 10
  if(dStr > cidD){
    coins = coins - cidD
    dimes.push("DIME", cidD)
  }else{
  coins = coins - (dime * 10)
  log.push("DIME", (dime*10)/100)
  dimes.push("DIME", (dime*10)/100)
  }
  }//end of dimes 
  if(coins >= 5){
  let nickle = Math.floor(coins/5)
  let nStr = nickle * 5
  let cidN = cid[1][1]*100
  if(nStr > cidN){
    coins = coins - cidN
    nickles.push("NICKEL", cidN)
  }else{
  coins = coins - (nickle * 5)
  log.push("NICKEL", (nickle*5)/100)
  nickles.push("NICKEL", (nickle*5)/100)
  }
  }//end nickle 
  if(coins >= 1){
  let penny = Math.floor(coins/1)
  let pStr = penny * 1
  let cidP = cid[0][1]*100
  if(pStr > cidP){
    coins = coins - cidP
    pens.push("PENNY", cidP)
  }else if (pStr === cidP){
    coins = coins - cidP
    let closeP = []
    pens.push("PENNY", cidP/100)
    closeP.push(pens)
    closeP.push(nickles)
    closeP.push(dimes)
    closeP.push(quarts)
    ones.push("ONE", 0)
    closeP.push(ones)
    fives.push("FIVE", 0)
    closeP.push(fives)
    tens.push("TEN", 0)
    closeP.push(tens)
    twens.push("TWENTY", 0)
    closeP.push(twens)
    hunds.push("ONE HUNDRED", 0)
    closeP.push(hunds)
    console.log("closeP", closeP)
    return{
      status: "CLOSED",
      change: closeP
    }
  }else{
  coins =coins - (penny * 1)
  log.push("PENNY", (penny*1)/100)
  pens.push("PENNY", (penny*1)/100)
  }
  }//end of pennys 
  if(coins != 0){
    console.log("INSUFFICIENT FUNDS")
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  let changes = []
  if(hunds != 0){
    changes.push(hunds)
  }
  if(twens != 0){
    changes.push(twens)
  }
  if(tens != 0){
    changes.push(tens)
  }
  if(fives != 0){
    changes.push(fives)
  }
  if(ones != 0){
    changes.push(ones)
  }
  if(quarts != 0.00){
    changes.push(quarts)
  }
  if(dimes != 0.00){
    changes.push(dimes)
  }
  if(nickles != 0.00){
    changes.push(nickles)
  }
  if(pens != 0.00){
    changes.push(pens)
  }
  //console.log(typeof(changes))
  console.log(changes)
  

  return {
    status: "OPEN",
    change: changes
  }
}//end of main fxn 

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

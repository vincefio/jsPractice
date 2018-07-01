const fs = require('fs')

let bankTotal = 0
let a = process.argv[2]
let b //= process.argv[3]

function total(bankArray){

  for(let i = 0; i < bankArray.length; i++){
    let x = parseFloat(bankArray[i])
    bankTotal += x
    //console.log(typeof bankArray[i])
  }
  bankTotal = bankTotal.toFixed(2)
  return bankTotal
}

function deposit(){
  b = ',' + process.argv[3]
  //console.log('b = ' + b)
  fs.appendFile('bank.txt', b, function(err){
    if(err){
      return console.log(err)
    }

    console.log('bank.txt was updated')
  })
}

function withdraw(){
  b = process.argv[3]
  b = b * -1
  b = ',' + b
  //console.log('b = ' + b)
  fs.appendFile('bank.txt', b, function(err){
    if(err){
      return console.log(err)
    }

    console.log('bank.txt was updated')
  })
}

fs.readFile('bank.txt', 'utf8', function(error, data){

  if(error){
    return console.log(errors)
  }

  //console.log('data ' + typeof data)

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  //console.log(dataArr);

  if(a == 'total'){
    //console.log('working')
    let x = total(dataArr)
    console.log('your total is ' + x)
  }

  else if(a == 'deposit'){
    //console.log('b is deposit')
    deposit()
  }
  else if(a == 'withdraw'){
    withdraw()
  }
})
